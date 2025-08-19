import { type ChangeEvent } from "react";
import { IoMdSearch } from "react-icons/io";

function SearchBar({
  searchText,
  onSearchTextChange,
  className,
}: {
  searchText: string;
  className: string;
  onSearchTextChange: (e: ChangeEvent) => void;
}) {
  return (
    <div
      className={`shadow-grey-400/20 mb-4 grid grid-cols-[10%_90%] rounded-md bg-white p-3 shadow-md max-sm:mx-auto max-sm:w-8/10 dark:bg-blue-900 ${className}`}
    >
      <IoMdSearch className="text-xl" />
      <input
        value={searchText}
        onChange={onSearchTextChange}
        type="text"
        placeholder="Search for a country..."
        className="mx-2 focus:outline-0"
      />
    </div>
  );
}

export default SearchBar;
