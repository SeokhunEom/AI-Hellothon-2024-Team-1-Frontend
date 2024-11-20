interface RecordingStatusProps {
  text: string;
}

export function RecordingStatus({ text }: RecordingStatusProps) {
  return (
    <div className="bg-gray-100 text-gray-500 mt-4 rounded-lg p-4 text-center">
      <p>기록중입니다</p>
      <p className="mt-2">{text}</p>
    </div>
  );
}

export default RecordingStatus;
