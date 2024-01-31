import React from "react";
import { Form } from "react-router-dom";
import SearchSelect from "./SearchSelect";
import SearchInput from "./SearchInput";

const SearchForm = () => {
  return (
    <Form className=" flex items-center justify-between flex-wrap gap-4 mb-12">
      <SearchInput />
      <button
        type="submit"
        className="cursor-pointer text-sm md:text-base uppercase dark:bg-slate-700 dark:text-slate-100 text-slate-700  shadow-lg rounded-md px-3 py-2 hover:scale-110 hover:text-green-500 dark:hover:text-green-500 transition duration-200 hover:font-semibold "
      >
        search
      </button>
      <SearchSelect />
    </Form>
  );
};

export default SearchForm;
