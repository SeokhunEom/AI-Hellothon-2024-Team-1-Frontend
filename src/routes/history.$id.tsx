import BeforeHeader from "../components/BeforeHeader";
import MemoryCard from "../components/MemoryCard";
import Tabs from "../components/Tabs";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/history/$id")({
  component: History,
});

const memory = {
  date: "방금",
  title: "오늘의 기억: 따뜻한 오후",
  imageSrc:
    "https://cdn.pixabay.com/photo/2024/03/08/09/47/ai-generated-8620359_1280.png",
  description:
    "오늘 아침에 공원을 산책하며 새 소리를 들었어요. 하늘이 맑고 시원한 바람이 부니 마음이 편안해졌습니다. 오후에는 오래된 친구가 전화를 걸어와 옛 추억을 이야기하며 웃음을 나눌 수 있어 정말 행복했죠. 저녁엔 손주가 영상통화를 하며 학교에",
};

function History() {
  return (
    <div>
      <BeforeHeader />
      <Tabs />
      {/* <div className="absolute inset-0 flex w-full items-center justify-center text-xl font-semibold">
        아직 추억이 없네요.
      </div> */}
      <div className="mt-4 flex flex-col items-center">
        <div className="w-full">
          <MemoryCard
            date={memory.date}
            title={memory.title}
            imageSrc={memory.imageSrc}
            description={memory.description}
          />
        </div>
      </div>
    </div>
  );
}
