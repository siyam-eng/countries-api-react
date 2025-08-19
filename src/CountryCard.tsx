import type { Country } from "./App";
import { Link } from "react-router";

function CountryCard({ country }: { country: Country }) {
  return (
    <Link to={country.cca3}>
      <article className="shadow-grey-400/10  mx-auto mb-5 max-w-8/10 rounded-md bg-white shadow-md md:max-w-9/10 dark:shadow-grey-950/10 dark:bg-blue-900">
        <div className="flag">
          <img
            className="w-full rounded-t-md"
            src={country.flag}
            alt={`${country.name} Flag Image`}
          />
        </div>
        <div className="details p-2 pb-5">
          <h1 className="my-2 text-xl font-bold sm:my-0">{country.name}</h1>
          <p className="">
            <span className="font-semibold">Population: </span>
            {country.population}
          </p>
          <p className="">
            <span className="font-semibold">Region: </span>
            {country.region}
          </p>
          <p className="">
            <span className="font-semibold">Capital: </span>
            {country.capital}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default CountryCard;
