import { Steps } from "antd";

interface CareCardProps {
  name: string;
  age: number;
  gender: "남" | "여";
  currentSession: number;
  totalSessions: number;
  progress: {
    recordPrep: boolean;
    materialPrep: boolean;
    education: boolean;
  };
}

function CareCard({
  name,
  age,
  gender,
  currentSession,
  totalSessions,
  progress,
}: CareCardProps) {
  const getCurrentStep = () => {
    if (!progress.recordPrep) return 0;
    if (!progress.materialPrep) return 1;
    if (!progress.education) return 2;
    return 3;
  };

  return (
    <div className="inline-flex h-60 w-full flex-col items-start justify-start gap-8 rounded-xl bg-black-1 p-4">
      <div className="inline-flex w-full items-start justify-between">
        <div className="inline-flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2">
            <div className="text-2xl font-semibold text-black-13">{name}</div>
            <div className="text-sm font-semibold text-black-13">
              {age}세/{gender}
            </div>
          </div>
          <div className="text-base font-medium text-black-13">
            {currentSession}/{totalSessions}회차 진행중
          </div>
        </div>
        <button className="bg-neutral-100 flex items-center gap-1 rounded border border-black-13 p-3">
          <span className="text-base font-semibold text-black-13">
            주간보고서
          </span>
        </button>
      </div>

      <div className="flex h-24 w-full flex-col justify-center">
        <Steps
          current={getCurrentStep()}
          items={[
            {
              title: "기록준비",
              description: progress.recordPrep ? "완료" : "시작전",
              status: progress.recordPrep ? "finish" : "wait",
            },
            {
              title: "교안제작",
              description: progress.materialPrep ? "완료" : "시작전",
              status: progress.materialPrep ? "finish" : "wait",
            },
            {
              title: "인지교육",
              description: progress.education ? "완료" : "시작전",
              status: progress.education ? "finish" : "wait",
            },
          ]}
          className="custom-steps"
        />
      </div>
    </div>
  );
}

export default CareCard;
