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
      <h3 className="text-center text-2xl uppercase font-semibold tracking-widest mt-16">
        {params.region && params.region}
      </h3>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-16">
        {countries.map((country) => {
          return <CountryCard key={country.name.common} {...country} />;
        })}
      </div>
    </section>
  );
};

export default CountriesList;
