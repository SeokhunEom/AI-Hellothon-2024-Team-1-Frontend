import BeforeHeader from "../components/BeforeHeader";
import { CareTabs } from "../components/CareTabs";
import ReadyCard from "../components/ReadyCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ready/$id")({
  component: Ready,
});

function Ready() {
  return (
    <div>
      <BeforeHeader to={"/care"} />
      <CareTabs activeTab="preparation" />
      <div className="mt-6 flex flex-col gap-5">
        <ReadyCard
          title="오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다."
          tags={["꽃놀이", "정숙이", "오대산"]}
          isSelected={true}
          isRecommended={true}
          isDisabled={true}
        />
        <ReadyCard
          title="오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다."
          tags={["꽃놀이", "정숙이", "오대산"]}
          isSelected={false}
          isRecommended={true}
          isDisabled={true}
        />
        <ReadyCard
          title="오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다."
          tags={["꽃놀이", "정숙이", "오대산"]}
          isSelected={false}
        />
      </div>
    </div>
  );
}
