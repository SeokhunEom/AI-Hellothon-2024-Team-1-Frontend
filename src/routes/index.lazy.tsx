import Button from "../components/Button";
import Card from "../components/Card";
import Header from "../components/Header";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-end gap-6">
        <Button icon="+">새로운 기록하기</Button>
        <div className="flex w-full flex-col gap-6">
          <Card
            title="오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다."
            tags={["꽃놀이", "정숙이", "오대산"]}
            image="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Card
            title="오늘의 기억: 따뜻한 오후 오늘의 기억: 따"
            tags={["꽃놀이", "정숙이", "오대산"]}
            image="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </main>
    </div>
  );
}
