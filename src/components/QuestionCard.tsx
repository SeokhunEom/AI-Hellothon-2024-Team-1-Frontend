interface QuestionCardProps {
  question: string;
  onNewQuestion: () => void;
  onReadQuestion: () => void;
  onStartRecording: () => void;
}

function QuestionCard({
  question,
  onNewQuestion,
  onReadQuestion,
  onStartRecording,
}: QuestionCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-yellow-main px-6 py-5">
      <p className="text-center text-lg font-bold">질문 1</p>
      <p className="text-center text-xl">{question}</p>
      <div className="px-4">
        <div className="flex gap-4">
          <button
            onClick={onNewQuestion}
            className="flex grow items-center justify-center rounded-md border bg-black-1 p-3 font-semibold"
          >
            다른 질문 만들어줘 🔄
          </button>
          <button
            onClick={onReadQuestion}
            className="flex grow items-center justify-center rounded-md border bg-black-1 p-3 font-semibold"
          >
            질문 읽어줘 🔊
          </button>
        </div>
        <button
          onClick={onStartRecording}
          className="mt-4 flex w-full items-center justify-center rounded-md border bg-black-1 p-3 font-semibold"
        >
          기록 시작하기 🎙️
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
