import { useParams, useNavigate } from "react-router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";
import useFetch from "./useFetch";
const BASE_URL = "https://restcountries.com/v3.1/alpha";
function CountryDetail() {
  const { countryCode } = useParams();
  const countryDetailUrl = `${BASE_URL}/${countryCode}`;
  const { data, error, isLoading } = useFetch(countryDetailUrl);
  // TODO: fetch the names of border countries

  if (!data) {
    return;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const country = data[0];
  console.log(country);

  console.log(countryCode);
  return (
    <main className="mx-auto w-9/10">
      <BackButton />
      <div className="container md:grid md:grid-cols-2 md:mt-10 md:place-items-start md:gap-10">
        <div className="flag my-8 md:my-0">
          <img
            className="w-full"
            src={country.flags.svg}
            alt={`${country.name.common} Flag Image`}
          />
        </div>

        <div className="all-details md:border-box">
          <h1 className="my-5 text-xl font-bold sm:text-2xl md:my-0 md:text-3xl">
            {country.name.official}
          </h1>
          <div className="details-wrapper md:grid md:grid-cols-2">
            <div className="primary-details my-8 leading-8">
              <p className="">
                <span className="font-semibold">Native Name: </span>
                {Object.values(country.name.nativeName)[0].common}
              </p>
              <p className="">
                <span className="font-semibold">Population: </span>
                {country.population}
              </p>
              <p className="">
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p className="">
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </p>
              <p className="">
                <span className="font-semibold">Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="additional-details my-8 leading-8">
              <p className="">
                <span className="font-semibold">Top Level Domain: </span>
                {country.tld.join(", ")}
              </p>
              <p className="">
                <span className="font-semibold">Currencies: </span>
                {Object.keys(country.currencies).join(", ")}
              </p>
              <p className="">
                <span className="font-semibold">Languages: </span>
                {Object.values(country.languages).join(", ")}
              </p>
            </div>
          </div>

          <div className="border-countries">
            <p className="mb-3 text-xl font-medium">Border Countries:</p>

            {country.borders ? (
              <BorderCountries countryCodes={country.borders} />
            ) : (
              "No Bordering Countries"
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export function BorderCountries({ countryCodes }) {
  const codesString = countryCodes ? countryCodes.join(",") : "";
  const countriesByCodesUrl = `${BASE_URL}?codes=${codesString}&fields=name,cca3`;

  console.log(countriesByCodesUrl);

  const {
    data: borderCountries,
    isLoading,
    error,
  } = useFetch(countriesByCodesUrl);

  if (!borderCountries) {
    return;
  }

  if (error) {
    console.log(error);

    return <span>{error}</span>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-wrap gap-3 pb-6">
      {borderCountries.map((borderCountry) => (
        <Link key={borderCountry.name.common} to={`/${borderCountry.cca3}`}>
          <button className="dark:shadow-grey-950/10 dark:hover:bg-grey-950 active:bg-grey-400 hover:bg-grey-400 gap-2 border border-blue-950 p-1 px-4 shadow-md dark:bg-blue-900">
            {borderCountry.name.common}
          </button>
        </Link>
      ))}
    </div>
  );
}

export function BackButton() {
  const navigate = useNavigate();
  return (
    <button
      className="dark:shadow-grey-950/10 dark:hover:bg-grey-950 active:bg-grey-400 hover:bg-grey-400 mb-5 flex place-items-center gap-2 border border-blue-950 p-2 px-4 shadow-md dark:bg-blue-900"
      onClick={() => navigate(-1)}
    >
      <FaArrowLeftLong className="inline text-lg" />
      <span>Back</span>
    </button>
  );
}

export default CountryDetail;
