import { Link } from "@tanstack/react-router";

interface TabItem {
  id: string;
  label: string;
  path: string;
}

interface CareTabsProps {
  activeTab: string;
  userName?: string;
}

const tabs: TabItem[] = [
  { id: "preparation", label: "기록준비", path: "/ready" },
  { id: "material", label: "교안제작", path: "/make" },
  { id: "education", label: "인지교육", path: "/edu" },
];

export const CareTabs = ({ activeTab, userName = "박정희" }: CareTabsProps) => {
  return (
    <div className="mt-3 inline-flex h-12 items-center justify-center gap-3">
      <div className="text-center">
        <span className="text-black text-2xl font-semibold leading-loose">
          {userName}
        </span>
        <span className="text-black text-lg font-semibold leading-loose">
          회원님
        </span>
      </div>
      <div className="flex h-12 shrink grow basis-0 items-center justify-start">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`flex cursor-pointer items-center justify-center gap-2.5 border-b-2 p-2 ${activeTab === tab.id ? "border-black-13" : "border-black-1"}`}
          >
            <Link
              to={`${tab.path}/1`}
              className={`text-center text-xl font-semibold leading-loose ${activeTab === tab.id ? "text-black-13" : "text-black-7"}`}
            >
              {tab.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
