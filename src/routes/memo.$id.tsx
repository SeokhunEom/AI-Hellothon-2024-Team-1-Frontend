import BeforeHeader from "../components/BeforeHeader";
import QuestionCard from "../components/QuestionCard";
import RecordedContent from "../components/RecordedContent";
import RecordingStatus from "../components/RecordingStatus";
import SummaryButton from "../components/SummaryButton";
import Tabs from "../components/Tabs";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/memo/$id")({
  component: Memo,
});

function Memo() {
  const [recording, setRecording] = useState(false);
  const [recordedContent, setRecordedContent] = useState(
    "오늘 방문한 곳에서 본 색깔 중 가장 아름다웠던 색은 노란색입니다. 그 중에서도 무슨 색이 제일 좋았냐면은.... 오늘 방문한 곳에서 본 색깔 중 가장 아름다웠던 색은 노란색입니다. 그 중에서도 무슨 색이 제일 좋았냐면은.... 중 가장 아름다웠던 색은 노란색입니다. 그 중에서도 무슨 색이 제일 좋았냐면은....",
  );
  const [showRecordedContent, setShowRecordedContent] = useState(true);

  const question =
    "오늘 방문한 곳에서 본 색깔 중 가장 아름다웠던 것은 무엇인가요? 질문이 길어진면 내용이 어떻게 들어가나요?";

  const handleStartRecording = () => {
    setRecording(true);
    setShowRecordedContent(false);
  };

  const handleStopRecording = () => {
    setRecordedContent(question);
    setRecording(false);
    setShowRecordedContent(true);
  };

  const handleNewQuestion = () => alert("새로운 질문으로 바꾸기");
  const handleReadQuestion = () => alert("질문 읽어주기");
  const handleRecordAgain = () => setShowRecordedContent(false);
  const handleNextQuestion = () => alert("다음 질문으로 이동");

  return (
    <div>
      <BeforeHeader />
      <Tabs />
      <div className="mt-6 flex flex-col gap-10">
        {!showRecordedContent && (
          <QuestionCard
            question={question}
            onNewQuestion={handleNewQuestion}
            onReadQuestion={handleReadQuestion}
            onStartRecording={handleStartRecording}
          />
        )}
        {recording && <RecordingStatus text="기록중입니다..." />}
        {showRecordedContent && (
          <RecordedContent
            content={recordedContent}
            question={question}
            onRecordAgain={handleRecordAgain}
            onNextQuestion={handleNextQuestion}
          />
        )}
        <SummaryButton onClick={() => alert("추억 만들기로 이동")} />
      </div>
    </div>
  );
}
