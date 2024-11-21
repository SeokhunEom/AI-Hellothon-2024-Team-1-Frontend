interface MemoryCardProps {
  date: string;
  title: string;
  imageSrc: string;
  description: string;
}

function MemoryCard({ date, title, imageSrc, description }: MemoryCardProps) {
  return (
    <div className="flex w-full flex-col items-center gap-6 bg-black-1 py-6">
      <div className="flex w-full flex-col gap-2">
        <div className="w-fit rounded-lg bg-blue-main p-2.5 text-center text-sm font-semibold">
          {date} 만든 추억
        </div>
        <div className="text-xl font-semibold">{title}</div>
      </div>
      <img
        className="h-80 w-screen max-w-[500px] object-cover"
        src={imageSrc}
        alt="Memory"
      />
      <p className="text-lg font-medium leading-8">{description}</p>
    </div>
  );
}

export default MemoryCard;