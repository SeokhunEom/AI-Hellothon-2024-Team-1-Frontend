interface BorderButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
}

function BorderButton({ text, className, ...props }: BorderButtonProps) {
  return (
    <button
      className={`inline-flex h-14 w-full max-w-md items-center justify-center gap-1 rounded border border-black-13 bg-black-1 px-3 py-4 ${className}`}
      {...props}
    >
      <span className="text-black text-center text-base font-semibold">
        {text}
      </span>
    </button>
  );
}

export default BorderButton;
