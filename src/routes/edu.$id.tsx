import BeforeHeader from "../components/BeforeHeader";
import BorderButton from "../components/BorderButton";
import { CareTabs } from "../components/CareTabs";
import EduCard from "../components/EduCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/edu/$id")({
  component: Edu,
});

function Edu() {
  return (
    <div>
      <BeforeHeader to={"/care"} />
      <CareTabs activeTab="education" />
      <div className="mt-6 flex flex-col gap-5">
        <BorderButton text="인지교육 시작 하기" />
        <EduCard
          questionNumber={1}
          question="손주들이랑 주말에 무엇을 하셨나요?"
          answer="손주들이랑 함께 앨범을 보며 옛날 사진 이야기를 나눴어요. 사진 속 이야기를 하다 보니 웃을 일도 많았고, 재미있었어요."
        />
        <EduCard
          questionNumber={2}
          question="손주들이랑 주말에 무엇을 하셨나요?"
          answer="손주들이랑 함께 앨범을 보며 옛날 사진 이야기를 나눴어요. 사진 속 이야기를 하다 보니 웃을 일도 많았고, 재미있었어요."
        />
      </div>
    </div>
  );
}
