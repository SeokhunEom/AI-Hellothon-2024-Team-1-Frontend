import BeforeHeader from "../components/BeforeHeader";
import ReportContent from "../components/ReportContent";
import Tabs from "../components/Tabs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/report/$id")({
  component: Report,
});

const mockReport = [
  {
    questionNumber: 1,
    question: "오늘의 따뜻한 기억",
    similarity: 87,
    ssamAnswer:
      "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔...",
    samAnswer:
      "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다. 오늘의 따뜻한 기억 : 해질녁 해의 색깔...",
  },
  {
    questionNumber: 2,
    question: "오늘의 따뜻한 기억",
    similarity: 92,
    ssamAnswer: "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다...",
    samAnswer: "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다...",
  },
  {
    questionNumber: 3,
    question: "오늘의 따뜻한 기억",
    similarity: 78,
    ssamAnswer: "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다...",
    samAnswer: "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다...",
  },
];

function Report() {
  return (
    <div>
      <BeforeHeader to={"/care"} />
      <Tabs
        title="김영호"
        subtitle="님 주간보고서 (24.11.18 ~ 24.11.25)"
        activeTab="1"
        items={[
          { id: "1", title: "1회차", subtitle: "11.18", path: "/path1" },
          { id: "2", title: "2회차", subtitle: "11.20", path: "/path2" },
          { id: "3", title: "3회차", subtitle: "11.23", path: "/path3" },
        ]}
      />
      <div className="mt-6 flex flex-col gap-5">
        {mockReport.map((report) => (
          <ReportContent
            key={report.questionNumber}
            questionNumber={report.questionNumber}
            question={report.question}
            similarity={report.similarity}
            ssamAnswer={report.ssamAnswer}
            samAnswer={report.samAnswer}
          />
        ))}
      </div>
    </div>
  );
}
