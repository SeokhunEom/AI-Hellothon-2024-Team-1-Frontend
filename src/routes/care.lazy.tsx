import CareCard from "../components/CareCard";
import Date from "../components/Date";
import Header from "../components/Header";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/care")({
  component: Care,
});

function Care() {
  return (
    <div>
      <Header
        title="쌤 : 기억을 관리하다"
        userName="영숙"
        userAvatar="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1732064354~exp=1732067954~hmac=079f1f5c755fdf9c06268450f5970da54148535a71a03b067175ad6c2ab7e1a6&w=1480"
      />
      <main className="flex flex-col items-end gap-6">
        <Date startDate="24.11.18" endDate="24.11.24" />
        <CareCard
          name="박정희"
          age={65}
          gender="여"
          currentSession={1}
          totalSessions={3}
          progress={{
            recordPrep: true,
            materialPrep: false,
            education: false,
          }}
        />
        <CareCard
          name="박정희"
          age={65}
          gender="여"
          currentSession={1}
          totalSessions={3}
          progress={{
            recordPrep: true,
            materialPrep: false,
            education: false,
          }}
        />
        <CareCard
          name="박정희"
          age={65}
          gender="여"
          currentSession={1}
          totalSessions={3}
          progress={{
            recordPrep: true,
            materialPrep: false,
            education: false,
          }}
        />
        <CareCard
          name="박정희"
          age={65}
          gender="여"
          currentSession={1}
          totalSessions={3}
          progress={{
            recordPrep: true,
            materialPrep: false,
            education: false,
          }}
        />
      </main>
    </div>
  );
}
