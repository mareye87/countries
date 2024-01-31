import React, { useEffect } from "react";
import SearchInput from "../components/SearchInput";
import CountriesList from "../components/CountriesList";
import axios from "axios";
import { redirect } from "react-router-dom";
import SearchForm from "../components/SearchForm";

const baseUrl = "https://restcountries.com/v3.1/";

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  let searchOption = "";
  if (params.name) {
    searchOption = "name/" + params.name;
  } else if (params.region) {
    searchOption = "region/" + params.region;
  } else {
    searchOption = "all";
  }
  try {
    const response = await axios(`${baseUrl}${searchOption}`);

    return { countries: response.data, params };
  } catch (error) {
    console.log(error);
    return redirect("/");
  }
};

const HomePage = () => {
  return (
    <section>
      <SearchForm />
      <CountriesList />
    </section>
  );
};

export default HomePage;
