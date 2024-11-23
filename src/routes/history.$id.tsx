import { createFileRoute, useParams } from "@tanstack/react-router";

import BeforeHeader from "../components/BeforeHeader";
import MemoryCard from "../components/MemoryCard";
import Tabs from "../components/Tabs";
import { useQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/history/$id")({
  component: History,
});

function History() {
  const { id } = useParams({ from: "/history/$id" });

  const { data, isLoading } = useQuery({
    queryKey: ["memory", id],
    queryFn: async () => {
      const response = await fetch(
        `https://fjtskwttcrchrywg.tunnel-pt.elice.io/records/${id}`,
      );
      if (!response.ok) throw new Error("Failed to fetch memory");
      return response.json();
    },
  });

  return (
    <div>
      <BeforeHeader to={"/"} />
      <Tabs
        activeTab="2"
        items={[
          { id: "1", title: "기록하기", path: `/memo/${id}` },
          { id: "2", title: "나의추억", path: `/history/${id}` },
        ]}
      />
      <div className="mt-4 flex flex-col items-center">
        <div className="w-full">
          {isLoading ? (
            <div className="text-center">로딩 중...</div>
          ) : data ? (
            <MemoryCard
              date={new Date(data.created_at)
                .toLocaleDateString("ko-KR", {
                  year: "2-digit",
                  month: "2-digit",
                  day: "2-digit",
                })
                .replace(/\. /g, ".")
                .slice(0, -1)}
              title={data.title}
              image={`https://fjtskwttcrchrywg.tunnel-pt.elice.io${data.image}`}
              description={data.content}
            />
          ) : (
            <div className="text-center">아직 추억이 없네요.</div>
          )}
        </div>
      </div>
    </div>
  );
}
