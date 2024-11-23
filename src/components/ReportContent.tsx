interface ReportContentProps {
  questionNumber: number;
  similarity: number;
  ssamAnswer: string;
  samAnswer: string;
}

const ReportContent = ({
  questionNumber,
  similarity,
  ssamAnswer,
  samAnswer,
}: ReportContentProps) => {
  return (
    <div className="inline-flex h-full w-full flex-col items-start justify-center gap-6 rounded-xl bg-black-3 px-6 py-5">
      <div className="inline-flex items-center justify-start gap-2">
        <div className="text-center text-base font-medium">
          질문 {questionNumber}
        </div>
        <div className="text-center">
          <span className="text-base font-medium">유사도 </span>
          <span className="text-base font-semibold text-red-system">
            {similarity}%
          </span>
        </div>
      </div>

      <div className="flex h-2/5 flex-col items-start justify-center gap-2 self-stretch">
        <div className="text-sm font-bold">쌤에서 답변한 내용</div>
        <div className="line-clamp-3 self-stretch text-base font-normal leading-relaxed">
          {ssamAnswer}
        </div>
        <button className="inline-flex items-center justify-center gap-2.5 rounded bg-black-5 px-2 py-1">
          <div className="text-center text-sm font-semibold">더보기</div>
        </button>
      </div>

      <div className="flex h-2/5 flex-col items-start justify-center gap-2 self-stretch">
        <div className="text-sm font-bold">샘에서 기록한 내용</div>
        <div className="line-clamp-3 self-stretch text-base font-normal leading-relaxed">
          {samAnswer}
        </div>
        <button className="inline-flex items-center justify-center gap-2.5 rounded bg-black-5 px-2 py-1">
          <div className="text-center text-sm font-semibold">더보기</div>
        </button>
      </div>
    </div>
  );
};

export default ReportContent;
