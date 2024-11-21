interface DateProps {
  startDate: string;
  endDate: string;
}

const Date = ({ startDate, endDate }: DateProps) => {
  return (
    <div className="inline-flex h-auto items-center justify-start gap-2">
      <div className="text-center text-xl font-medium text-black-13">
        {startDate} ~ {endDate}
      </div>
      <div className="relative aspect-square h-full" />
    </div>
  );
};

export default Date;
