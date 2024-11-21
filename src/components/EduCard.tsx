interface EduCardProps {
  questionNumber: number;
  question: string;
  answer: string;
}

const EduCard = ({ questionNumber, question, answer }: EduCardProps) => {
  return (
    <div className="inline-flex items-start justify-end gap-4 rounded-xl bg-black-3 p-5">
      <div className="inline-flex flex-1 flex-col items-start justify-start gap-4">
        <div className="text-black self-stretch text-base font-semibold">
          질문{questionNumber}. <br />
          {question}
        </div>
        <div className="text-black self-stretch text-sm font-medium">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default EduCard;
