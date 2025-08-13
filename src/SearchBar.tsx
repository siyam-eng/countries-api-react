function SearchBar() {
  return (
    <div className="shadow-grey-400/20 mx-auto mb-4 grid w-8/10 grid-cols-[10%_90%] rounded-md bg-white p-4 shadow-md">
      <i className="">🔍</i>
      <input
        type="text"
        placeholder="Search for a country..."
        className="b mx-2 focus:outline-0"
      />
    </div>
  );
}

export default SearchBar;
