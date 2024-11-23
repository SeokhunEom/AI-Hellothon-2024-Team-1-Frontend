import { Link, createLazyFileRoute } from "@tanstack/react-router";

import Button from "../components/Button";
import Header from "../components/Header";
import IconPlus from "../assets/iconPlus.svg?react";
import IndexCard from "../components/IndexCard";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const userMock = {
  id: 1,
  name: "영숙",
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1732064354~exp=1732067954~hmac=079f1f5c755fdf9c06268450f5970da54148535a71a03b067175ad6c2ab7e1a6&w=1480",
};

const IndexCardMock = [
  {
    title: "오늘의 따뜻한 기억 : 해질녁 해의 색깔이 너무 아름답다.",
    tags: ["꽃놀이", "정숙이", "오대산"],
    image:
      "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cardId: "1",
  },
  {
    title: "오늘의 기억: 따뜻한 오후 오늘의 기억: 따",
    tags: ["꽃놀이", "정숙이", "오대산"],
    image:
      "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    cardId: "2",
  },
];

function Index() {
  return (
    <div>
      <Header isSam userName={userMock.name} userAvatar={userMock.avatar} />
      <main className="flex flex-col items-end gap-6">
        <Link to={`/memo/${userMock.id}`}>
          <Button icon={<IconPlus />} size="xl">
            새로운 기록하기
          </Button>
        </Link>
        <div className="flex w-full flex-col gap-6">
          {IndexCardMock.map((card) => (
            <IndexCard
              key={card.cardId}
              title={card.title}
              tags={card.tags}
              image={card.image}
              cardId={card.cardId}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
