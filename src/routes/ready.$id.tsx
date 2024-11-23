import BeforeHeader from "../components/BeforeHeader";
import ReadyCard from "../components/ReadyCard";
import Tabs from "../components/Tabs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ready/$id")({
  component: Ready,
});

function Ready() {
  return (
    <div>
      <BeforeHeader to={"/care"} />
      <Tabs
        title="김영호"
        subtitle="님"
        activeTab="1"
        items={[
          { id: "1", title: "기록준비", path: "/ready/1" },
          { id: "2", title: "교안제작", path: "/make/1" },
          { id: "3", title: "인지활동", path: "/edu/1" },
        ]}
      />
      <div className="mt-6 flex flex-col gap-5">
        <ReadyCard
          title="오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다."
          tags={["꽃놀이", "정숙이", "오대산"]}
          isRecommended={true}
          content="내용"
        />
        <ReadyCard
          title="오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다."
          tags={["꽃놀이", "정숙이", "오대산"]}
          isRecommended={true}
          content="내용2"
        />
        <ReadyCard
          title="오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다."
          tags={["꽃놀이", "정숙이", "오대산"]}
          content="내3"
        />
      </div>
    </div>
  );
}
