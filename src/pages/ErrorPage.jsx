import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <div className="h-screen grid place-items-center bg-slate-100">
        <h1 className="text-2xl md:text-4xl tracking-wider leading-10 mx-4 text-slate-900  max-w-3xl  ">
          Sorry, we couldn't find the page you're looking for...
        </h1>
        <Link
          to="/"
          className="bg-red-500 text-white text-semibold px-2 py-1 rounded-md uppercase"
        >
          back home
        </Link>
      </div>
    );
  }
  return (
    <div className="h-screen grid place-items-center bg-slate-100 p-4">
      <h1 className="text-5xl text-slate-900">Sorry, there was an error...</h1>
      <Link
        to="/"
        className="bg-red-500 text-white text-semibold px-2 py-1 rounded-md uppercase"
      >
        back home
      </Link>
    </div>
  );
};

export default ErrorPage;
