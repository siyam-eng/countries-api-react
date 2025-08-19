import CountryCard from "./CountryCard";
import SearchBar from "./SearchBar";
import RegionSelector from "./RegionSelector";
import useFetch from "./useFetch";
import { useState } from "react";

export interface Country {
  name: string;
  cca3: string;
  capital: string;
  region: string;
  population: number;
  flag: string;
}

const apiUrl = "https://restcountries.com/v3.1";
const allCountriesUrl =
  apiUrl + "/all?fields=name,capital,region,population,flags,cca3";

const HomePage: React.FC = () => {
  const { data, isLoading, error } = useFetch(allCountriesUrl);

  // State for the SearchBar
  const [searchText, setSearchText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  function handleSearchChange(e) {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }

  function handleSelectionChange(e) {
    console.log(e.target.value);
    // add some conditions here

    setSelectedRegion(e.target.value);
  }

  // return early if no data is returned
  if (!data) {
    return;
  }
  let countries: Country[] = data.map((country) => {
    return {
      name: country.name.official,
      cca3: country.cca3,
      capital: country.capital[0],
      region: country.region,
      population: country.population,
      flag: country.flags.svg,
    };
  });

  // filter the countries by searchtext
  countries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // filter by region
  countries = countries.filter((country) =>
    country.region.toLowerCase().includes(selectedRegion.toLowerCase())
  );

  // Prepare the country card UI from the data
  const countryCards = countries.map((country) => (
    <CountryCard key={country.name} country={country} />
  ));

  // Return the error
  if (error) {
    return <div>{error}</div>;
  }

  // Return the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // if no error and not loading, return the main page
  return (
    <main>
      <div className="sm:mx-auto sm:flex sm:max-w-9/10 sm:justify-between">
        <SearchBar
          searchText={searchText}
          onSearchTextChange={handleSearchChange}
          className="max-h-[3rem] sm:w-md"
        />
        <RegionSelector
          selectedRegion={selectedRegion}
          onSelectionChange={handleSelectionChange}
          className="sm:w-xsm max-h-[3rem]"
          regions={[
            "Asia",
            "Africa",
            "Europe",
            "Americas",
            "Antarctica",
            "Oceania",
          ]}
        />
      </div>
      <div className="sm:mx-auto sm:grid sm:max-w-9/10 sm:grid-cols-3 md:grid-cols-4">
        {countryCards}
      </div>
    </main>
  );
};
export default HomePage;
