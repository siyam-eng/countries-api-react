function Header({ websiteTitle, mode }) {
  return (
    <header className="shadow-grey-400/20 mb-5 flex justify-between p-3 shadow-lg">
      <h1 className="text-lg font-bold">{websiteTitle}</h1>
      <button className="flex justify-between gap-3">
        <i className="">🌙 </i>
        <span className="">{mode} Mode</span>
      </button>
    </header>
  );
}

export default Header;
