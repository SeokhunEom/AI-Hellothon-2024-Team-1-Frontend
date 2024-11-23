import IconDots from "../assets/iconDots.svg?react";

interface RecordingStatusProps {
  highlightedText: string;
  normalText: string;
}

const RecordingStatus = ({
  highlightedText,
  normalText,
}: RecordingStatusProps) => {
  return (
    <div className="inline-flex flex-col items-center justify-start gap-8 rounded-xl bg-black-3 p-5">
      <div className="flex h-44 flex-col items-center justify-center gap-4 self-stretch">
        <div className="flex flex-col items-center justify-start gap-1">
          <IconDots />
          <div className="text-black text-lg font-bold">기록중입니다</div>
        </div>
        <div className="self-stretch text-center">
          <p className="text-xl font-bold leading-[35px] text-black-5">
            {highlightedText}
          </p>
          <p className="text-xl font-bold leading-[35px] text-black-8">
            {normalText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecordingStatus;
