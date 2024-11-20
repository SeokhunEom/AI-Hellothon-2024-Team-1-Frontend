import { Link, useRouter } from "@tanstack/react-router";

const TABS = [
  { path: "/memo", label: "기록하기" },
  { path: "/history", label: "나의추억" },
] as const;

function Tabs() {
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  const getTabStyles = (path: string) => {
    const isActive = currentPath.startsWith(path);
    return `p-2 text-2xl font-semibold border-b-2 ${
      isActive ? "border-black-13 text-black-13" : "border-black-1 text-black-7"
    }`;
  };

  return (
    <div className="mt-4 flex items-center justify-start gap-1">
      {TABS.map((tab) => (
        <Link
          key={tab.path}
          to={`${tab.path}/$id`}
          params={{ id: "123" }}
          className={getTabStyles(tab.path)}
        >
          {tab.label}
        </Link>
      ))}
    </div>
  );
}

export default Tabs;
