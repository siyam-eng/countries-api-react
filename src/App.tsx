import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
import Header from "./NavBar";
import SearchBar from "./SearchBar";
import RegionSelector from "./RegionSelector";

const apiUrl = "http://localhost:8000/countries";

const HomePage: React.FC = () => {
  const [countries, setCountries] = useState([
    { name: "Afghanistan", capital: "Kabul" },
    { name: "Bangladesh", capital: "Dhaka" },
  ]);

  // load data from the API
  useEffect(() => {
    // Use fetch to load data from the API.
    // fetch returns a Promise that resolves to the Response object representing the response to the request.
    fetch(apiUrl)
      // The first .then() waits for the fetch Promise to resolve.
      // 'e' is the Response object from the fetch call.
      .then((e) => {
        console.log("Fetching data"); // Log to indicate the fetch started.

        // The .json() method parses the response body as JSON.
        // It also returns a Promise, so we need another .then() to handle the parsed data.
        return e.json();
      })

      // The second .then() waits for the .json() Promise to resolve.
      // 'data' is now the parsed JSON from the API response.
      .then((data) => {
        setCountries(data); // update the countries state
      });
  }, []); // this funciton runs only on the page load because we have set an empty dependency array. Not setting the dependency array would make the function run on every render and create an infinite loop!
  const countryCards = countries.map((country) => (
    <CountryCard country={country} />
  ));
  return (
    <main className="bg-grey-50 font-nunito-sans">
      <Header websiteTitle={"Countries Website"} mode={"light"} />
      <SearchBar />
      <RegionSelector
        regions={[
          "Asia",
          "Africa",
          "Europe",
          "North America",
          "South America",
          "Antarctica",
          "Oceania",
        ]}
      />
      {countryCards}
    </main>
  );
};
export default HomePage;
