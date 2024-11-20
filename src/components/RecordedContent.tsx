interface RecordedContentProps {
  content: string;
  question: string;
  onRecordAgain: () => void;
  onNextQuestion: () => void;
}

function RecordedContent({
  content,
  question,
  onRecordAgain,
  onNextQuestion,
}: RecordedContentProps) {
  return (
    <div className="inline-flex flex-col items-start justify-start gap-4">
      <div className="flex flex-col items-center justify-start gap-5 self-stretch rounded-xl bg-yellow-sub px-6 py-5">
        <div className="flex flex-col items-start justify-center gap-1 self-stretch">
          <p className="text-black text-lg font-bold">
            질문 1 - 기록된 내용입니다.
          </p>
          <p className="text-black self-stretch text-base font-medium leading-7">
            {question}
          </p>
        </div>
        <p className="text-black text-lg font-medium leading-loose">
          {content}
        </p>
      </div>
      <div className="inline-flex items-center justify-start gap-3 self-stretch">
        <button
          onClick={onRecordAgain}
          className="bg-white border-black flex h-12 items-center justify-center gap-1 rounded border p-3"
        >
          <span className="text-black text-center text-base font-semibold">
            다시 기록하기
          </span>
          <span>🎙️</span>
        </button>
        <button
          onClick={onNextQuestion}
          className="bg-white border-black flex h-12 grow items-center justify-center gap-1 rounded border p-3"
        >
          <span className="text-black text-center text-base font-semibold">
            다음 질문으로 넘어가기
          </span>
          <span>➡️</span>
        </button>
      </div>
    </div>
  );
}

export default RecordedContent;
