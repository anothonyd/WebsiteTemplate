
const SearchBar = () => {
  return (
    <div className="flex items-center justify-between w-full bg-white rounded-lg shadow-inner">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 rounded-l-lg focus:outline-none"
      />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-r-lg">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
