import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { UseFetch } from "../../components/UseFetch";

// pages
import Border from "../borders/Border";
function About() {
  const { country } = useParams();

  const [url, setUrl] = useState(
    `https://restcountries.com/v3.1/name/` + country
  );

  const { data, error, isPending } = UseFetch(url);
  const navigate = useNavigate();

  return (
    <div>
      {data && (
        <>
          {data.map((country) => {
            console.log(country);

            const {
              population,
              borders,
              capital,

              name,
              region,
              tld,
              currencies,
              languages,
              subregion,
            } = country;
            const nativeName = Object.values(name.nativeName)[0].official;
            const language = Object.values(languages);
            const currency = Object.values(currencies)[0].name;
            console.log(nativeName);
            return (
              <div key={country.name.common}>
                <div className="max-w-7xl m-auto countryInfo">
                  <div className="flex justify-center items-start flex-wrap gap-20 dark:bg-slate-800">
                    <div className=" mb-4">
                      <img
                        src={country.flags.png}
                        className="object-cover h-48 w-96 ..."
                      />
                    </div>
                    <div className="w-3/5 dark:text-slate-100">
                      <h1 className="mb-5 font-bold text-3xl">
                        {country.name.common}
                      </h1>
                      <ul className="flex justify-start items-start gap-10 flex-wrap mb-7 w-auto">
                        <li className="country-list">
                          <p>
                            Native Name:
                            <span className="font-bold">{nativeName}</span>
                          </p>
                          <p>
                            Population:
                            <span className="font-bold">{population}</span>
                          </p>
                          <p>
                            Region:
                            <span className="font-bold">{region}</span>
                          </p>
                          <p>
                            Sub Region:
                            <span className="font-bold">{subregion}</span>
                          </p>
                          <p>
                            Capital:
                            <span className="font-bold">{capital}</span>
                          </p>
                        </li>
                        <li className="country-item">
                          <p>
                            Top level Domain:
                            <span className="font-bold">{tld}</span>
                          </p>
                          <p>
                            Currencies:
                            <span className="font-bold">{currency}</span>
                          </p>
                          <p>
                            Languages:
                            <span className="font-bold">{language} </span>
                          </p>
                        </li>
                      </ul>
                      <Border borders={borders} country={country} />
                    </div>
                  </div>
                </div>
                <div className="max-w-7xl mx-auto mb-6 mt-5">
                  <Link
                    to={`/`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      className="mr-2"
                      width="24"
                      height="30"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                        fill="currentColor"
                      />
                    </svg>
                    Back
                  </Link>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default About;
