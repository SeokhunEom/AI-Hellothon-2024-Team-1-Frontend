interface ButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
}

function Button({ children, icon, variant = "default" }: ButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-blue-main p-3 rounded-lg"
      : "bg-black-1 p-3 rounded";

  return (
    <button
      className={`flex items-center gap-2.5 text-center ${variantClasses}`}
    >
      <span className="text-sm font-semibold">{children}</span>
      {icon && <span className="h-6 w-6">{icon}</span>}
    </button>
  );
}

export default Button;
