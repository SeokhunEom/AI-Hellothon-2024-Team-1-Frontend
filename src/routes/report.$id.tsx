import BeforeHeader from "../components/BeforeHeader";
import ReportContent from "../components/ReportContent";
import ReportTab from "../components/ReportTab";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/report/$id")({
  component: Report,
});

const mockSessions = [
  { number: 1, date: "11.18" },
  { number: 2, date: "11.20" },
  { number: 3, date: "11.23" },
];

const mockReport = [
  {
    questionNumber: 1,
    similarity: 87,
    ssamAnswer:
      "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔...",
    samAnswer:
      "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔...",
  },
  {
    questionNumber: 2,
    similarity: 92,
    ssamAnswer: "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다...",
    samAnswer: "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다...",
  },
  {
    questionNumber: 3,
    similarity: 78,
    ssamAnswer: "오늘의 따뜣한 기억 : 해질녁 해의 색깔이 너무 아름답다...",
    samAnswer: "오늘의 따뜣한 기억 : 해질녁 해의 색깔이 너무 아름답다...",
  },
];

function Report() {
  return (
    <div>
      <BeforeHeader to={"/care"} />
      <ReportTab name="박정희" sessions={mockSessions} currentSession={1} />
      <div className="mt-6 flex flex-col gap-5">
        {mockReport.map((report) => (
          <ReportContent
            key={report.questionNumber}
            questionNumber={report.questionNumber}
            similarity={report.similarity}
            ssamAnswer={report.ssamAnswer}
            samAnswer={report.samAnswer}
          />
        ))}
      </div>
    </div>
  );
}
