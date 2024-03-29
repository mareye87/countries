import { Link } from "react-router-dom";

const CountryCard = ({ flags, name, population, capital, region }) => {
  const getPosition = () => {
    const position = window.scrollY;
    localStorage.setItem("lastPosition", position);
  };
  return (
    <div
      onClick={() => {
        getPosition();
      }}
      className=" rounded-lg overflow-hidden shadow-lg hover:scale-105 hover:shadow-xl transition duration-300 bg-slate-50 text-slate-800 dark:bg-slate-700 dark:text-slate-50 "
    >
      <Link
        to={`name/${name.official}?fullText=true`}
        className="flex flex-col justify-between"
      >
        <div>
          <img
            src={flags.svg}
            alt={flags.alt || "flag image"}
            className="w-full object-cover shadow-lg "
          />
        </div>
        <div className="flex flex-col gap-y-1 p-6 ">
          <h4 className="font-semibold text-lg">{name.common}</h4>
          <h5 className="font-semibold">
            Population:
            <span className="ml-1 font-normal">
              {new Intl.NumberFormat().format(population)}
            </span>
          </h5>
          <h5 className="font-semibold">
            Region:<span className="ml-1 font-normal">{region}</span>
          </h5>
          <h5 className="font-semibold">
            Capital:<span className="ml-1 font-normal">{capital}</span>
          </h5>
        </div>
      </Link>
    </div>
  );
};

export default CountryCard;
