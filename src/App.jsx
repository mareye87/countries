import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CountryPage, ErrorPage, HomePage, Layout } from "./pages";

import { loader as homePageLoader } from "./pages/HomePage";
import { loader as countryPageLoader } from "./pages/CountryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homePageLoader,
      },
      {
        path: "name/:name",
        element: <CountryPage />,
        loader: countryPageLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
