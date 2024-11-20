import { Link } from "@tanstack/react-router";

function BeforeHeader() {
  return (
    <header className="inline-flex flex-col items-start justify-start gap-4">
      <Link
        to="/"
        className="inline-flex items-center justify-center gap-1 px-2 py-1"
      >
        <span>⬅</span>
        <span className="text-center text-base font-medium leading-loose">
          메인화면으로 돌아가기
        </span>
      </Link>
    </header>
  );
}

export default BeforeHeader;
