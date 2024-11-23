interface HeaderProps {
  title: string;
  userName?: string;
  userAvatar?: string;
}

function Header({ title, userName, userAvatar }: HeaderProps) {
  return (
    <header className="mb-10 flex items-center justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="flex items-center space-x-2">
        <img src={userAvatar} alt={userName} className="h-8 w-8 rounded-full" />
        <span className="text-lg font-semibold">{userName}</span>
      </div>
    </header>
  );
}

export default Header;
