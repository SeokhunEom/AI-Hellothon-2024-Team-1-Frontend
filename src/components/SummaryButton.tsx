interface SummaryButtonProps {
  onClick: () => void;
}

function SummaryButton({ onClick }: SummaryButtonProps) {
  return (
    <div className="inline-flex flex-col items-center justify-center gap-1 rounded-xl bg-blue-main px-6 py-3">
      <button
        onClick={onClick}
        className="inline-flex items-center justify-start gap-2"
      >
        <span className="text-black text-center text-base font-bold">
          오늘 기록한 내용으로 추억만들기
        </span>
        <span>📝</span>
      </button>
      <div className="text-black text-center text-base font-normal">
        <p>인공지능이 기록을 정리해</p>
        <p>추억을 만들어드려요</p>
      </div>
    </div>
  );
}

export default SummaryButton;
