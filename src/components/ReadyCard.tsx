interface ReadyCardProps {
  title: string;
  tags: string[];
  isSelected?: boolean;
  isDisabled?: boolean;
}

const ReadyCard = ({
  title,
  tags,
  isSelected,
  isDisabled = false,
}: ReadyCardProps) => {
  return (
    <div
      className={`flex w-full flex-col items-start justify-center gap-6 rounded-xl bg-black-3 px-6 py-5 ${isSelected ? "border-2 border-black-13" : ""}`}
    >
      <div className="flex w-full flex-col items-start justify-center gap-3">
        {isSelected && (
          <>
            <div className="inline-flex items-center justify-start gap-2.5 rounded bg-[#0fa5b9] px-2 py-1">
              <div className="text-center text-lg font-medium text-black-1">
                선택된 교안
              </div>
            </div>
            <div className="inline-flex items-center justify-start gap-2.5 rounded bg-[#fdd7ab] px-2 py-1">
              <div className="text-center text-sm font-medium">
                교안에 적합한 기록이에요!
              </div>
            </div>
          </>
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
        <button className="border-black flex h-12 w-1/2 items-center justify-center gap-1 rounded border bg-black-1 p-3">
          <span className="text-center text-base font-semibold">기록 보기</span>
        </button>
        <button
          className={`flex h-12 w-1/2 items-center justify-center gap-1 rounded border p-3 ${
            isDisabled
              ? "border-[#bfbfbf] bg-[#f0f0f0]"
              : "bg-white-1 border-black-13"
          }`}
        >
          <span
            className={`text-center text-base font-semibold ${
              isDisabled ? "text-[#bfbfbf]" : ""
            }`}
          >
            교안 만들기
          </span>
        </button>
      </div>
    </div>
  );
};

export default ReadyCard;
