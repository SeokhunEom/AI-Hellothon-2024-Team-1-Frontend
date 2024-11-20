function Header() {
  return (
    <header className="mb-10 flex items-center justify-between">
      <h1 className="text-2xl font-bold">샘 : 기억을 담다</h1>
      <div className="flex items-center space-x-2">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1732064354~exp=1732067954~hmac=079f1f5c755fdf9c06268450f5970da54148535a71a03b067175ad6c2ab7e1a6&w=1480"
          alt="User Avatar"
          className="h-8 w-8 rounded-full"
        />
        <span className="text-lg font-semibold">영숙</span>
      </div>
    </header>
  );
}

export default Header;
