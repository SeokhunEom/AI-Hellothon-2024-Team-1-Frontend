import BeforeHeader from "../components/BeforeHeader";
import BorderButton from "../components/BorderButton";
import { CareTabs } from "../components/CareTabs";
import IconCheckSquare from "../assets/iconCheckSquare.svg?react";
import IconEdit from "../assets/iconEdit.svg?react";
import MakeCard from "../components/MakeCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/make/$id")({
  component: Make,
});

function Make() {
  return (
    <div>
      <BeforeHeader to={"/care"} />
      <CareTabs activeTab="material" />
      <div className="mt-6 flex flex-col gap-5">
        <MakeCard
          questionNumber={1}
          question="손주들이랑 주말에 무엇을 하셨나요?"
          expectedAnswer="손주들이랑 함께 앨범을 보며 옛날 사진 이야기를 나눴어요. 사진 속 이야기를 하다 보니 웃을 일도 많았고, 재미있었어요."
        />
        <MakeCard
          questionNumber={2}
          question="손주들이랑 주말에 무엇을 하셨나요?"
          expectedAnswer="손주들이랑 함께 앨범을 보며 옛날 사진 이야기를 나눴어요. 사진 속 이야기를 하다 보니 웃을 일도 많았고, 재미있었어요."
        />
        <BorderButton text="직접 질문 추가하기" icon={<IconEdit />} />
        <BorderButton text="이 교안으로 확정하기" icon={<IconCheckSquare />} />
      </div>
    </div>
  );
}
