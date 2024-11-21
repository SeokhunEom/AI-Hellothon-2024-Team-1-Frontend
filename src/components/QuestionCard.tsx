import BorderButton from "./BorderButton";

interface QuestionCardProps {
  question: string;
  isRecording: boolean;
  onReadQuestion: () => void;
  onStartRecording: () => void;
  onEndRecording: () => void;
}

function QuestionCard({
  question,
  isRecording,
  onReadQuestion,
  onStartRecording,
  onEndRecording,
}: QuestionCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-yellow-main px-6 py-5">
      <p className="text-center text-lg font-bold">질문 1</p>
      <p className="text-center text-xl">{question}</p>
      <div className="flex flex-col items-center justify-center gap-3 px-8">
        <BorderButton text={"질문 읽어줘 🔊"} onClick={onReadQuestion} />
        {!isRecording && (
          <BorderButton text={"기록 시작하기 🎙️"} onClick={onStartRecording} />
        )}
        {isRecording && (
          <BorderButton text={"기록 종료하기 🎙️"} onClick={onEndRecording} />
        )}
      </div>
    </div>
  );
}

export default QuestionCard;
