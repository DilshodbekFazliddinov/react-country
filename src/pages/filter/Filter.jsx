function Filter({ setUrl }) {
  return (
    <div>
      <select
        id="countries"
        onChange={(e) => {
          if (e.target.value == "All") {
            setUrl("https://restcountries.com/v3.1/all");
          } else {
            setUrl(`https://restcountries.com/v3.1/region/${e.target.value}`);
          }
        }}
        className="countrySelect bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 max-w-xs focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="All">All</option>
        <option value="Europe">Europe</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Filter;
