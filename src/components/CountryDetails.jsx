import { useLoaderData, useNavigate } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";

const CountryDetails = () => {
  const country = useLoaderData();
  const navigate = useNavigate();

  const {
    flags,
    name,
    population,
    region,
    capital,
    subregion,
    tld,
    currencies,
    languages,
    borders,
    maps,
  } = country;

  console.log(country);

  let natLanguages = Object.keys(languages || []);
  let nativeName = name?.nativeName[natLanguages[0]]?.official || " No Info ";
  const currenciesList = Object.keys(currencies || []);
  const languagesList = Object.values(languages || []);
  const bordersList = Object.values(borders || []);

  if (!country) {
    return (
      <div className="grid h-screen place-items-center">
        <h1 className="text-3xl text-center">
          Sorry, there was a problem. Try again later...
        </h1>
      </div>
    );
  }

  return (
    <article>
      {/* <<< home button >>> */}
      <div>
        <button
          className="shadow-lg rounded-md  px-4 py-2 mb-8 hover:scale-105 transition duration-200"
          onClick={() => {
            navigate(-1);
          }}
        >
          <div className="flex gap-x-1 items-center justify-center">
            <IoMdArrowDropleft />
            Go Back
          </div>
        </button>
      </div>
      {/* ---------------------------------------- */}
      <div className="grid md:grid-cols-2 md:gap-x-8 md:items-center ">
        {/* <<< image >>> */}
        <div className="px-2 py-8 md:p-0">
          <img
            src={flags.svg || flags.png}
            alt={flags.alt}
            className="max-h-80 sm:max-h-96   mx-auto rounded-md shadow-sm"
          />
        </div>
        {/* <<< info >>> */}
        <div className="px-2 md:mt-8 flex flex-col gap-y-6">
          {/* info-title */}
          <div>
            <h3 className="text-xl md:text-2xl lg:text-4xl font-bold mb-2">
              {name.common}
            </h3>
          </div>
          {/* info-details */}
          <div className="flex flex-col md:flex-row md:justify-between gap-x-8 gap-y-6 ">
            <div className="flex flex-col  gap-y-2 ">
              <p className="font-semibold lg:text-lg ">
                Native Name
                <span className="font-normal ml-2">
                  {nativeName ? nativeName : "-"}
                </span>
              </p>
              <p className="font-semibold lg:text-lg">
                Population
                <span className="font-normal ml-2">
                  {population
                    ? new Intl.NumberFormat().format(population)
                    : "-"}
                </span>
              </p>
              <p className="font-semibold lg:text-lg">
                Region
                <span className="font-normal ml-2">
                  {region ? region : "-"}
                </span>
              </p>
              <p className="font-semibold lg:text-lg">
                Subregion
                <span className="font-normal ml-2">
                  {subregion ? subregion : " - "}
                </span>
              </p>
              <p className="font-semibold lg:text-lg">
                Capital
                <span className="font-normal ml-2">
                  {capital ? capital : "-"}
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-y-2 ">
              <p className="font-semibold lg:text-lg">
                Top Level Domain
                <span className="font-normal ml-2">{tld ? tld : "-"}</span>
              </p>
              <p className="font-semibold lg:text-lg">
                Currencies
                {currenciesList.length > 0 ? (
                  currenciesList.map((item, index) => {
                    return (
                      <span className="font-normal ml-2" key={index}>
                        {item}
                      </span>
                    );
                  })
                ) : (
                  <span className="font-normal ml-2">-</span>
                )}
              </p>
              <p className="font-semibold lg:text-lg">
                Languages
                {languagesList.length > 0 ? (
                  languagesList.map((language) => {
                    return (
                      <span className="font-normal ml-2" key={language}>
                        {language}
                      </span>
                    );
                  })
                ) : (
                  <span className="font-normal ml-2">-</span>
                )}
              </p>
              <a
                href={maps.googleMaps}
                target="blanc"
                className="font-semibold text-bl lg:text-lg flex items-center gap-x-2"
              >
                See on map
                <FaGlobeAmericas />
              </a>
            </div>
          </div>

          {/* border countries */}

          <div className="flex flex-col md:flex-row gap-2 ">
            <h3 className="font-semibold lg:text-lg">Bordering Countries</h3>
            <div className="flex gap-x-2 flex-wrap">
              {bordersList.length > 0 ? (
                borders.map((item) => {
                  return <button key={item}>{item}</button>;
                })
              ) : (
                <span className="font-normal ml-2">-</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CountryDetails;
