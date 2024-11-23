import IconArrowCircleRight from "../assets/iconArrowCircleRight.svg?react";

interface MemoFinishButtonProps {
  onClick: () => void;
}

function MemoFinishButton({ onClick }: MemoFinishButtonProps) {
  return (
    <div
      onClick={onClick}
      className="inline-flex h-32 w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-xl bg-blue-main"
    >
      <div className="inline-flex items-center justify-start gap-2">
        <div className="text-black text-center text-base font-bold">
          오늘 기록한 내용으로 추억만들기
        </div>
        <IconArrowCircleRight />
      </div>
      <div className="text-black text-center text-base font-normal">
        인공지능이 기록을 정리해 <br />
        추억을 만들어드려요
      </div>
    </div>
  );
}

export default MemoFinishButton;
