import { Link } from "react-router-dom";

// pages
import Search from "../search/Search";
import Filter from "../filter/Filter";
function Home({ data, setUrl, error }) {
  return (
    <div className="dark:bg-slate-800 pt-6">
      <div className="max-w-7xl m-auto mt-4 flex justify-between mb-4">
        <Search setUrl={setUrl} error={error} />

        <Filter setUrl={setUrl} />
      </div>
      <div
        className="flex justify-between max-w-7xl flex-wrap m-auto"
        id="cardCountry"
      >
        {data &&
          data.map((country) => {
            const capital = country.capital ? country.capital[0] : "No Capital";
            return (
              <div
                key={country.name.common}
                className="cardsCountryBox hover:scale-105 duration-500 w-72 p-1  mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700"
              >
                <div className="bg-indigo-300 ... mb-4">
                  <img
                    src={country.flags.png}
                    className="object-cover h-48 w-96 ..."
                  />
                </div>
                <a href="#">
                  <h5
                    className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white cardTitle"
                    id="cardTitle"
                  >
                    {country.name.common}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Population:<b>{country.population}</b>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Region: <b>{country.region}</b>
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Capital:<b>{capital}</b>
                </p>
                <Link
                  to={`./about/${country.name.common}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Home;
