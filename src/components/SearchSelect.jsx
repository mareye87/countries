import { useLoaderData } from "react-router-dom";

const regions = [
  "africa",
  "antarctic",
  "americas",
  "asia",
  "europe",
  "oceania",
];

const SearchSelect = () => {
  return (
    <div className="flex items-center gap-x-4 px-3 py-2 rounded-md shadow-md text-sm md:text-base  bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-100">
      <select
        name="region"
        id="region"
        className=" uppercase px-4 bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-100 "
      >
        <option value="">Filter by region</option>
        {regions.map((region) => {
          return (
            <option
              key={region}
              value={region}
              className="uppercase font-semibold tracking-widest "
            >
              {region}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SearchSelect;
