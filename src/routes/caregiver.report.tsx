import { useEffect, useState } from "react";

import BeforeHeader from "../components/BeforeHeader";
import ReportContent from "../components/ReportContent";
import Tabs from "../components/Tabs";
import { createFileRoute } from "@tanstack/react-router";

interface Analysis {
  id: number;
  question: string;
  first_answer: string;
  last_answer: string;
  similarity: number;
}

interface Report {
  id: number;
  elder_id: number;
  analyses: Analysis[];
  created_at: string;
}

export const Route = createFileRoute("/caregiver/report")({
  component: CaregiverReport,
});

function CaregiverReport() {
  const [reports, setReports] = useState<Report[]>([]);
  const { trial, id = "1" }: { trial: string; id: string } = Route.useSearch();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch(
          `https://fjtskwttcrchrywg.tunnel-pt.elice.io/reports/?elder_id=${id}&year=2024&week_number=47`,
        );
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error("Failed to fetch reports:", error);
      }
    };

    fetchReports();
  }, []);

  const currentReport = reports.find(
    (_, index) => index === parseInt(trial) - 1,
  );

  return (
    <div>
      <BeforeHeader to={"/caregiver/home"} />
      <Tabs
        title="김영호"
        subtitle="님 주간보고서 (24.11.18 ~ 24.11.24)"
        activeTab={trial}
        items={reports.slice(0, 3).map((_, index) => ({
          id: (index + 1).toString(),
          title: `${index + 1}회차`,
          subtitle: `${new Date(reports[index].created_at).getMonth() + 1}.${new Date(reports[index].created_at).getDate()}`,
          path: `?trial=${index + 1}`,
        }))}
      />
      <div className="mt-6 flex flex-col gap-5">
        {currentReport?.analyses.map((analysis, index) => (
          <ReportContent
            key={analysis.id}
            questionNumber={index + 1}
            question={analysis.question}
            similarity={analysis.similarity}
            ssamAnswer={analysis.first_answer}
            samAnswer={analysis.last_answer}
          />
        ))}
      </div>
    </div>
  );
}
