import BeforeHeader from "../components/BeforeHeader";
import CareQuestionCard from "../components/CareQuestionCard";
import RecordedContent from "../components/RecordedContent";
import RecordingStatus from "../components/RecordingStatus";
import SummaryButton from "../components/SummaryButton";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/caregiver/record")({
  component: CaregiverRecord,
});

function CaregiverRecord() {
  const [recording, setRecording] = useState(false);
  const [recordedContent, setRecordedContent] = useState("");
  const [showRecordedContent, setShowRecordedContent] = useState(false);
  const [isLastQuestion, setIsLastQuestion] = useState(false);
  const id = 1;

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
    setIsLastQuestion(true);
  };

  const handleReadQuestion = () => alert("질문 읽어주기");
  const handleRecordAgain = () => setShowRecordedContent(false);
  const handleNextQuestion = () => alert("다음 질문으로 이동");

  return (
    <div>
      <BeforeHeader
        to={`/caregiver/activity?id=${id}`}
        text="뒤로가기"
        isModalActive
      />
      <div className="mt-6 flex flex-col gap-10">
        {!showRecordedContent && (
          <CareQuestionCard
            question={question}
            isRecording={recording}
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
            questionNumber={1}
            isLastQuestion={isLastQuestion}
            isSam={false}
            onRecordAgain={handleRecordAgain}
            onNextQuestion={handleNextQuestion}
          />
        )}
        {isLastQuestion && (
          <SummaryButton onClick={() => alert("오늘 교육 끝내기")} />
        )}
      </div>
    </div>
  );
}
