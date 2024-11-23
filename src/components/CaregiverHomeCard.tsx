import { Link, useNavigate } from "@tanstack/react-router";

import IconFile from "../assets/iconFile.svg?react";
import IconFileGray from "../assets/iconFileGray.svg?react";
import ReportButton from "./ReportButton";
import { Steps } from "antd";

interface CareCardProps {
  name: string;
  age: number;
  gender: string;
  currentSession: number;
  totalSessions: number;
  progress: {
    recordPrep: boolean;
    materialPrep: boolean;
    education: boolean;
  };
}

function CaregiverHomeCard({
  name,
  age,
  gender,
  currentSession,
  totalSessions,
  progress,
}: CareCardProps) {
  const navigate = useNavigate();

  const getCurrentStep = () => {
    if (!progress.recordPrep) return 0;
    if (!progress.materialPrep) return 1;
    if (!progress.education) return 2;
    return 3;
  };

  return (
    <div className="inline-flex w-full flex-col items-start justify-start gap-8 rounded-xl bg-black-1 p-4">
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
        <Link to={"/caregiver/report"} search={{ id: "1" }}>
          <ReportButton
            text="주간보고서"
            icon={currentSession !== 3 ? <IconFileGray /> : <IconFile />}
            disabled={currentSession !== 3 || getCurrentStep() !== 3}
          />
        </Link>
      </div>
      <div className="flex w-full flex-col justify-center">
        <Steps
          labelPlacement="vertical"
          current={getCurrentStep()}
          items={[
            {
              title: "기록준비",
              description: progress.recordPrep ? "완료" : "시작전",
              status: progress.recordPrep ? "finish" : "wait",
              onClick: () =>
                navigate({ to: "/caregiver/ready", search: { id: "1" } }),
              className: "cursor-pointer",
            },
            {
              title: "교안제작",
              description: progress.materialPrep ? "완료" : "시작전",
              status: progress.materialPrep ? "finish" : "wait",
              onClick: () =>
                navigate({ to: "/caregiver/create", search: { id: "1" } }),
              className: "cursor-pointer",
            },
            {
              title: "인지활동",
              description: progress.education ? "완료" : "시작전",
              status: progress.education ? "finish" : "wait",
              onClick: () =>
                navigate({ to: "/caregiver/activity", search: { id: "1" } }),
              className: "cursor-pointer",
            },
          ]}
          className="custom-steps"
        />
      </div>
    </div>
  );
}

export default CaregiverHomeCard;
