import CareCard from "../components/CareCard";
import Date from "../components/Date";
import Header from "../components/Header";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/care")({
  component: Care,
});

const mockUser = [
  {
    id: 1,
    name: "박정희",
    age: 65,
    gender: "여",
    currentSession: 1,
    totalSessions: 3,
    progress: {
      recordPrep: true,
      materialPrep: false,
      education: false,
    },
  },
  {
    id: 2,
    name: "김영삼",
    age: 72,
    gender: "남",
    currentSession: 2,
    totalSessions: 3,
    progress: {
      recordPrep: true,
      materialPrep: true,
      education: false,
    },
  },
  {
    id: 3,
    name: "이순자",
    age: 68,
    gender: "여",
    currentSession: 3,
    totalSessions: 3,
    progress: {
      recordPrep: true,
      materialPrep: true,
      education: true,
    },
  },
  {
    id: 4,
    name: "최서영",
    age: 70,
    gender: "여",
    currentSession: 1,
    totalSessions: 3,
    progress: {
      recordPrep: false,
      materialPrep: false,
      education: false,
    },
  },
];

function Care() {
  return (
    <div>
      <Header
        userName="영숙"
        userAvatar="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1732064354~exp=1732067954~hmac=079f1f5c755fdf9c06268450f5970da54148535a71a03b067175ad6c2ab7e1a6&w=1480"
      />
      <main className="flex flex-col items-end gap-6">
        <Date startDate="24.11.18" endDate="24.11.24" />
        {mockUser.map((user) => (
          <CareCard
            name={user.name}
            age={user.age}
            gender={user.gender}
            currentSession={user.currentSession}
            totalSessions={user.totalSessions}
            progress={user.progress}
          />
        ))}
      </main>
    </div>
  );
}
