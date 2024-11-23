import IconFilePlus from "../assets/iconFilePlus.svg?react";
import IconFilePlusGray from "../assets/iconFilePlusGray.svg?react";
import IconFileSearch from "../assets/iconFileSearch.svg?react";
import ReportButton from "./ReportButton";

interface ReadyCardProps {
  title: string;
  tags: string[];
  isSelected?: boolean;
  isRecommended?: boolean;
  isDisabled?: boolean;
}

const ReadyCard = ({
  title,
  tags,
  isSelected,
  isRecommended,
  isDisabled = false,
}: ReadyCardProps) => {
  return (
    <div
      className={`flex w-full flex-col items-start justify-center gap-6 rounded-xl bg-black-3 px-6 py-5 ${isSelected ? "border-2 border-black-13" : ""}`}
    >
      <div className="flex w-full flex-col items-start justify-center gap-3">
        {isSelected && (
          <div className="inline-flex items-center justify-start gap-2.5 rounded bg-[#0fa5b9] px-2 py-1">
            <div className="text-center text-lg font-medium text-black-1">
              선택된 교안
            </div>
          </div>
        )}
        {isRecommended && (
          <div className="inline-flex items-center justify-start gap-2.5 rounded bg-[#fdd7ab] px-2 py-1">
            <div className="text-center text-sm font-medium">
              교안에 적합한 기록이에요!
            </div>
          </div>
        )}
        <div className="self-stretch text-xl font-semibold">{title}</div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2.5 rounded bg-black-5 px-2 py-1"
            >
              <div className="text-center text-sm font-semibold">{tag}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="inline-flex w-full items-start justify-start gap-3">
        <ReportButton
          size="grow"
          text="기록 보기"
          icon={<IconFileSearch />}
          onClick={() => alert("기록 보기")}
        />
        <ReportButton
          size="grow"
          text="교안 만들기"
          icon={isDisabled ? <IconFilePlusGray /> : <IconFilePlus />}
          onClick={() => alert("교안 만들기")}
          disabled={isDisabled}
        />
      </div>
    </div>
  );
};

export default ReadyCard;
