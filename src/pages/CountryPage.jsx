import axios from "axios";
import React from "react";
import CountryDetails from "../components/CountryDetails";

const baseUrl = "https://restcountries.com/v3.1/";

export const loader = async ({ params }) => {
  const response = await axios(`${baseUrl}/name/${params.name}`);
  const country = response.data[0];
  return country;
};

const CountryPage = () => {
  return <CountryDetails />;
};

export default CountryPage;
