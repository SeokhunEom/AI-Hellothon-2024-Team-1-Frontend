import BorderButton from "./BorderButton";
import IconMic from "../assets/iconMic.svg?react";
import IconPower from "../assets/iconPower.svg?react";
import IconVolume from "../assets/iconVolume.svg?react";

interface CareQuestionCardProps {
  question: string;
  isRecording: boolean;
  onReadQuestion: () => void;
  onStartRecording: () => void;
  onEndRecording: () => void;
}

function CareQuestionCard({
  question,
  isRecording,
  onReadQuestion,
  onStartRecording,
  onEndRecording,
}: CareQuestionCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-yellow-main px-6 py-5">
      <p className="text-center text-lg font-bold">질문 1</p>
      <p className="text-center text-xl">{question}</p>
      <div className="flex flex-col items-center justify-center gap-3 px-8">
        <BorderButton
          className="w-full"
          text={"질문 읽어줘"}
          onClick={onReadQuestion}
          icon={<IconVolume />}
        />
        {!isRecording && (
          <BorderButton
            className="w-full"
            text={"기록 시작하기"}
            onClick={onStartRecording}
            icon={<IconMic />}
          />
        )}
        {isRecording && (
          <BorderButton
            className="w-full"
            text={"기록 종료하기"}
            onClick={onEndRecording}
            icon={<IconPower />}
          />
        )}
      </div>
    </div>
  );
}

export default CareQuestionCard;
