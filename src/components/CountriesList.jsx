import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import CountryCard from "./CountryCard";

const CountriesList = () => {
  const { countries, params } = useLoaderData();

  let lastPosition = localStorage.getItem("lastPosition");

  useEffect(() => {
    window.scrollTo(0, lastPosition || 0);
    localStorage.setItem("lastPosition", 0);
  }, []);

  return (
    <section>
      {params.region && (
        <h3 className="text-center text-2xl uppercase font-semibold tracking-widest mt-16 pb-2 px-2 border-b border-red-600">
          {params.region}
        </h3>
      )}

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16 ">
        {countries.map((country) => {
          return <CountryCard key={country.name.common} {...country} />;
        })}
      </div>
    </section>
  );
};

export default CountriesList;
