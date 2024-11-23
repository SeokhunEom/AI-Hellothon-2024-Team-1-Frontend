import { AnswerResponse, Question } from "../types";
import {
  createFileRoute,
  useNavigate,
  useParams,
} from "@tanstack/react-router";
import { useEffect, useRef } from "react";

import BeforeHeader from "../components/BeforeHeader";
import MemoFinishButton from "../components/MemoFinishButton";
import QuestionCard from "../components/QuestionCard";
import RecordedContent from "../components/RecordedContent";
import RecordingStatus from "../components/RecordingStatus";
import Tabs from "../components/Tabs";
import { useMemoStore } from "../stores/memoStore";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

async function fetchQuestion(): Promise<Question> {
  const response = await fetch(
    "https://fjtskwttcrchrywg.tunnel-pt.elice.io/questions/random",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  if (!response.ok) {
    throw new Error("Failed to fetch question");
  }
  return response.json();
}

export const Route = createFileRoute("/memo/$id")({
  component: Memo,
});

function Memo() {
  const navigate = useNavigate();
  const {
    currentQuestion,
    setCurrentQuestion,
    addAnswer,
    addAnsweredQuestionId,
    answeredQuestionIds,
    clearAnsweredQuestionIds,
    currentQuestionNumber,
    incrementQuestionNumber,
    resetQuestionNumber,
  } = useMemoStore();
  const [recording, setRecording] = useState(false);
  const [recordedContent, setRecordedContent] = useState("");
  const [showRecordedContent, setShowRecordedContent] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const { id } = useParams({ from: "/memo/$id" });

  const { isLoading, error, refetch } = useQuery({
    queryKey: ["question"],
    queryFn: async () => {
      const question = await fetchQuestion();
      setCurrentQuestion(question);
      return question;
    },
  });

  useEffect(() => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "ko-KR";
      recognitionRef.current = recognition;
    }
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.start();
      setRecording(true);
      setShowRecordedContent(false);
    } catch (err) {
      console.error("음성 녹음 시작 실패:", err);
    }
  };

  const stopRecording = async () => {
    if (!mediaRecorderRef.current) return;

    return new Promise<void>((resolve) => {
      mediaRecorderRef.current!.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        await sendAudioToServer(audioBlob);
        resolve();
      };

      mediaRecorderRef.current!.stop();
      mediaRecorderRef
        .current!.stream.getTracks()
        .forEach((track) => track.stop());
      setRecording(false);
      setShowRecordedContent(true);
    });
  };

  const sendAudioToServer = async (audioBlob: Blob) => {
    const formData = new FormData();
    formData.append("audio", audioBlob, "recording.wav");
    formData.append("elder_id", id);
    formData.append("question_id", currentQuestion?.id?.toString() || "1");

    try {
      const response = await fetch(
        "https://fjtskwttcrchrywg.tunnel-pt.elice.io/answers/",
        {
          method: "POST",
          body: formData,
        },
      );

      if (!response.ok) {
        throw new Error("오디오 전송 실패");
      }

      const result: AnswerResponse = await response.json();
      setRecordedContent(result.response);
      addAnswer(result);
      addAnsweredQuestionId(currentQuestion?.id || 0);
    } catch (err) {
      console.error("오디오 전송 중 에러:", err);
    }
  };

  const handleStartRecording = () => {
    startRecording();
  };

  const handleStopRecording = () => {
    stopRecording();
  };

  const handleRecordAgain = () => {
    setRecording(true);
    setShowRecordedContent(false);
  };

  const handleRefreshQuestion = () => refetch();
  const handleReadQuestion = () => alert("질문 읽어주기");
  const handleNextQuestion = async () => {
    setShowRecordedContent(false);
    setRecordedContent("");
    incrementQuestionNumber();
    await refetch();
  };
  const handleFinishMemo = async () => {
    try {
      const response = await fetch(
        "https://fjtskwttcrchrywg.tunnel-pt.elice.io/records/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            elder_id: id,
            question_ids: answeredQuestionIds,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("기록 생성 실패");
      }

      resetQuestionNumber();
      clearAnsweredQuestionIds();
      const responseJson = await response.json();
      navigate({ to: `/history/${responseJson.id}` });
    } catch (error) {
      console.error("기록 생성 중 에러:", error);
      alert("기록 생성에 실패했습니다.");
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <BeforeHeader to={"/"} isModalActive={true} />
      <Tabs
        activeTab="1"
        items={[
          { id: "1", title: "기록하기", path: `/memo/{id}` },
          { id: "2", title: "나의추억", path: `/history/${id}` },
        ]}
      />
      <div className="mt-6 flex flex-col gap-10">
        {!showRecordedContent && (
          <QuestionCard
            questionNumber={currentQuestionNumber}
            question={`${currentQuestion?.text ?? ""}`}
            isRecording={recording}
            onRefreshQuestion={handleRefreshQuestion}
            onReadQuestion={handleReadQuestion}
            onStartRecording={handleStartRecording}
            onEndRecording={handleStopRecording}
          />
        )}
        {recording && <RecordingStatus highlightedText="" normalText="" />}
        {showRecordedContent && (
          <RecordedContent
            content={recordedContent || "로딩중..."}
            questionNumber={currentQuestionNumber}
            question={currentQuestion?.text ?? ""}
            isSam={true}
            onRecordAgain={handleRecordAgain}
            onNextQuestion={handleNextQuestion}
          />
        )}
        {showRecordedContent && <MemoFinishButton onClick={handleFinishMemo} />}
      </div>
    </div>
  );
}
