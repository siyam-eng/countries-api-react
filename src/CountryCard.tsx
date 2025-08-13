const countryDemo = {
  name: "Afghanistan",
  topLevelDomain: [".af"],
  alpha2Code: "AF",
  alpha3Code: "AFG",
  callingCodes: ["93"],
  capital: "Kabul",
  altSpellings: ["AF", "Afġānistān"],
  subregion: "Southern Asia",
  region: "Asia",
  population: 40218234,
  latlng: [33, 65],
  demonym: "Afghan",
  area: 652230,
  timezones: ["UTC+04:30"],
  borders: ["IRN", "PAK", "TKM", "UZB", "TJK", "CHN"],
  nativeName: "افغانستان",
  numericCode: "004",
  flags: {
    svg: "https://flagcdn.com/af.svg",
    png: "https://flagcdn.com/w320/af.png",
  },
  currencies: [
    {
      code: "AFN",
      name: "Afghan afghani",
      symbol: "؋",
    },
  ],
  languages: [
    {
      iso639_1: "ps",
      iso639_2: "pus",
      name: "Pashto",
      nativeName: "پښتو",
    },
    {
      iso639_1: "uz",
      iso639_2: "uzb",
      name: "Uzbek",
      nativeName: "Oʻzbek",
    },
    {
      iso639_1: "tk",
      iso639_2: "tuk",
      name: "Turkmen",
      nativeName: "Türkmen",
    },
  ],
  translations: {
    br: "Afghanistan",
    pt: "Afeganistão",
    nl: "Afghanistan",
    hr: "Afganistan",
    fa: "افغانستان",
    de: "Afghanistan",
    es: "Afganistán",
    fr: "Afghanistan",
    ja: "アフガニスタン",
    it: "Afghanistan",
    hu: "Afganisztán",
  },
  flag: "https://flagcdn.com/af.svg",
  regionalBlocs: [
    {
      acronym: "SAARC",
      name: "South Asian Association for Regional Cooperation",
    },
  ],
  cioc: "AFG",

  independent: true,
};
function CountryCard({ country }) {
  return (
    <article className="shadow-grey-400/10 mx-auto mb-5 max-w-8/10 rounded-md bg-white shadow-md">
      <div className="flag">
        <img
          className="w-full rounded-t-md"
          src={country.flag}
          alt={`${country.name} Flag Image`}
        />
      </div>
      <div className="details p-2 pb-5">
        <h1 className="my-2 text-xl font-bold">{country.name}</h1>
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
  );
}

export default CountryCard;
