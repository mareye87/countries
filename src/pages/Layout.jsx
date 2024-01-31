import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import GlobalLoading from "../components/GlobalLoading";

const Layout = () => {
  const loading = useNavigation();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-50 ">
      <Navbar />
      {loading.state === "loading" ? (
        <GlobalLoading />
      ) : (
        <section className="max-w-6xl pt-32 mx-auto p-4  ">
          <Outlet />
        </section>
      )}
    </main>
  );
};

export default Layout;
