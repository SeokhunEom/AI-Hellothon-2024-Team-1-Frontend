import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";

import BeforeHeader from "../components/BeforeHeader";
import CareQuestionCard from "../components/CareQuestionCard";
import Loading from "../components/Loading";
import RecordedContent from "../components/RecordedContent";
import RecordingStatus from "../components/RecordingStatus";
import SummaryButton from "../components/SummaryButton";
import { sendAnswerToServer } from "../apis";
import { useCaregiverMemoStore } from "../stores/caregiverMemoStore";

export const Route = createFileRoute("/caregiver/record")({
  component: CaregiverRecord,
});

function CaregiverRecord() {
  const navigate = useNavigate();
  const {
    questions,
    currentQuestion,
    setCurrentQuestion,
    addAnswer,
    resetAnswers,
    addAnsweredQuestionId,
    answeredQuestionIds,
    clearAnsweredQuestionIds,
    currentQuestionNumber,
    incrementQuestionNumber,
    resetQuestionNumber,
  } = useCaregiverMemoStore();

  const { id, userId }: { id: string; userId: string } = Route.useSearch();
  const [recording, setRecording] = useState(false);
  const [recordedContent, setRecordedContent] = useState("");
  const [showRecordedContent, setShowRecordedContent] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    resetQuestionNumber();
    resetAnswers();
    clearAnsweredQuestionIds();
    if (questions.length > 0) {
      setCurrentQuestion(questions[0]);
    }
  }, []);

  useEffect(() => {
    if (currentQuestionNumber >= questions.length) {
      setIsLastQuestion(true);
    }
  }, [currentQuestionNumber, questions.length]);

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
    try {
      const result = await sendAnswerToServer(
        audioBlob,
        userId,
        currentQuestion?.id?.toString() || "1",
      );
      setRecordedContent(result.response);
      addAnswer(result);
      addAnsweredQuestionId(currentQuestion?.id || 0);
    } catch (err) {
      console.error("오디오 전송 중 에러:", err);
    }
  };

  const handleNextQuestion = () => {
    incrementQuestionNumber();
    if (currentQuestionNumber < questions.length) {
      setCurrentQuestion(questions[currentQuestionNumber]);
    }
    setShowRecordedContent(false);
    setRecordedContent("");
  };

  const handleFinishActivity = async () => {
    try {
      await fetch(
        `https://fjtskwttcrchrywg.tunnel-pt.elice.io/guides/finish/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ answeredQuestionIds }),
        },
      );
      navigate({ to: "/caregiver/home" });
    } catch (error) {
      console.error("기록 생성 중 에러:", error);
      alert("기록 생성에 실패했습니다.");
    }
  };

  return (
    <div>
      <BeforeHeader
        to={`/caregiver/activity?id=${id}&userId=${userId}`}
        isModalActive
      />
      <div className="mt-6 flex flex-col gap-10">
        {!showRecordedContent && (
          <CareQuestionCard
            question={currentQuestion?.text || ""}
            questionNumber={currentQuestionNumber}
            isRecording={recording}
            isLoading={false}
            onReadQuestion={() => {}}
            onStartRecording={startRecording}
            onEndRecording={stopRecording}
          />
        )}
        {recording && <RecordingStatus highlightedText="" normalText="" />}
        {showRecordedContent && (
          <RecordedContent
            content={recordedContent || <Loading />}
            question={currentQuestion?.text || ""}
            questionNumber={currentQuestionNumber}
            isLastQuestion={isLastQuestion}
            isSam={false}
            onRecordAgain={() => setShowRecordedContent(false)}
            onNextQuestion={handleNextQuestion}
          />
        )}
        {isLastQuestion && showRecordedContent && (
          <SummaryButton onClick={handleFinishActivity} />
        )}
      </div>
    </div>
  );
}
