import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function Navbar({ isDark, setIsDark }) {
  return (
    <div className="bg-slate-200 dark:bg-blue-400 ">
      <div className="max-w-7xl m-auto flex p-3 justify-between">
        <Link to="/" className="text-5xl dark:text-slate-100">
          Where in the world
        </Link>
        <button
          onClick={() => {
            setIsDark(!isDark);
          }}
          className="modeSite"
        >
          Dark
        </button>
      </div>
    </div>
  );
}

export default Navbar;
