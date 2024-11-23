import BeforeHeader from "../components/BeforeHeader";
import MemoFinishButton from "../components/MemoFinishButton";
import QuestionCard from "../components/QuestionCard";
import RecordedContent from "../components/RecordedContent";
import RecordingStatus from "../components/RecordingStatus";
import Tabs from "../components/Tabs";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/memo/$id")({
  component: Memo,
});

function Memo() {
  const [recording, setRecording] = useState(false);
  const [recordedContent, setRecordedContent] = useState("");
  const [showRecordedContent, setShowRecordedContent] = useState(false);

  const question =
    "오늘 방문한 곳에서 본 색깔 중 가장 아름다웠던 것은 무엇인가요? 질문이 길어진면 내용이 어떻게 들어가나요?";

  const handleStartRecording = () => {
    setRecording(true);
    setShowRecordedContent(false);
  };

  const handleStopRecording = () => {
    setRecordedContent(
      "오늘 방문한 곳에서 본 색깔 중 가장 아름다웠던 색은 노란색입니다. 그 중에서도 무슨 색이 제일 좋았냐면은.... 오늘 방문한 곳에서 본 색깔 중 가장 아름다웠던 색은 노란색입니다. 그 중에서도 무슨 색이 제일 좋았냐면은.... 중 가장 아름다웠던 색은 노란색입니다. 그 중에서도 무슨 색이 제일 좋았냐면은....",
    );
    setRecording(false);
    setShowRecordedContent(true);
  };

  const handleRecordAgain = () => {
    setRecording(true);
    setShowRecordedContent(false);
  };

  const handleRefreshQuestion = () => alert("다른 질문 만들어주기");
  const handleReadQuestion = () => alert("질문 읽어주기");
  const handleNextQuestion = () => alert("다음 질문으로 이동");
  const handleFinishMemo = () => alert("오늘 교육 끝내기");

  return (
    <div>
      <BeforeHeader to={"/"} isModalActive={true} />
      <Tabs
        activeTab="1"
        items={[
          { id: "1", title: "기록하기", path: "/memo/1" },
          { id: "2", title: "나의추억", path: "/history/1" },
        ]}
      />
      <div className="mt-6 flex flex-col gap-10">
        {!showRecordedContent && (
          <QuestionCard
            question={question}
            isRecording={recording}
            onRefreshQuestion={handleRefreshQuestion}
            onReadQuestion={handleReadQuestion}
            onStartRecording={handleStartRecording}
            onEndRecording={handleStopRecording}
          />
        )}
        {recording && (
          <RecordingStatus
            highlightedText="오늘 방문한 곳에서 본 색깔 중 가장 아름다웠던 색은 노란색입니다. 그 중에서도 무슨"
            normalText="색이 제일 좋았냐면은...."
          />
        )}
        {showRecordedContent && (
          <RecordedContent
            content={recordedContent}
            question={question}
            onRecordAgain={handleRecordAgain}
            onNextQuestion={handleNextQuestion}
          />
        )}
        {showRecordedContent && <MemoFinishButton onClick={handleFinishMemo} />}
      </div>
    </div>
  );
}
