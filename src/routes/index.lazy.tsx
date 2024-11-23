import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { RecordResponse, UserResponse } from "../types";

import Button from "../components/Button";
import Header from "../components/Header";
import IconPlus from "../assets/iconPlus.svg?react";
import IndexCard from "../components/IndexCard";
import { useQuery } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const { data: userData, isLoading: userLoading } = useQuery<UserResponse>({
    queryKey: ["user", 1],
    queryFn: () =>
      fetch("https://fjtskwttcrchrywg.tunnel-pt.elice.io/elders/1").then(
        (res) => res.json(),
      ),
  });

  const { data: recordsData, isLoading: recordsLoading } = useQuery<
    RecordResponse[]
  >({
    queryKey: ["records", 1],
    queryFn: () =>
      fetch("https://fjtskwttcrchrywg.tunnel-pt.elice.io/records/user/1").then(
        (res) => res.json(),
      ),
  });

  if (userLoading || recordsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header
        isSam
        userName={userData?.name ?? ""}
        userAvatar="/assets/avatar.png"
      />
      <main className="flex flex-col items-end gap-6">
        <Link to={`/memo/${userData?.id}`}>
          <Button icon={<IconPlus />} size="xl">
            새로운 기록하기
          </Button>
        </Link>
        <div className="flex w-full flex-col gap-6">
          {recordsData?.map((record) => (
            <IndexCard
              key={record.id}
              title={record.title}
              tags={record.keywords.slice(0, 3)}
              image={`https://fjtskwttcrchrywg.tunnel-pt.elice.io${record.image}`}
              cardId={record.id.toString()}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
