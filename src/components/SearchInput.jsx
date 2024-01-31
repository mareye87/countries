const SearchInput = () => {
  return (
    <div className="p-2 outline-0 rounded-md shadow-md w-full md:w-1/2 text-sm md:text-base dark:bg-slate-700   ">
      <input
        type="search"
        name="name"
        placeholder="search for a country"
        defaultValue=""
        className="outline-0 bg-transparent uppercase w-full   "
      />
    </div>
  );
};

export default SearchInput;
