import { Link, createFileRoute } from "@tanstack/react-router";

import BeforeHeader from "../components/BeforeHeader";
import BorderButton from "../components/BorderButton";
import EduCard from "../components/EduCard";
import IconChevron from "../assets/iconChevron.svg?react";
import Tabs from "../components/Tabs";

export const Route = createFileRoute("/edu/$id")({
  component: Edu,
});

function Edu() {
  const id = "1";

  return (
    <div>
      <BeforeHeader to={"/care"} />
      <Tabs
        title="김영호"
        subtitle="님"
        activeTab="3"
        items={[
          { id: "1", title: "기록준비", path: "/ready/1" },
          { id: "2", title: "교안제작", path: "/make/1" },
          { id: "3", title: "인지활동", path: "/edu/1" },
        ]}
      />
      <div className="mt-6 flex flex-col gap-5">
        <Link to={`/care-memo/$id`} params={{ id }}>
          <BorderButton
            text="인지활동 시작 하기"
            icon={<IconChevron />}
            className="w-full"
          />
        </Link>
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
