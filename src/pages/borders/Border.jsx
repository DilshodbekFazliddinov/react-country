// import React, { Fragment } from "react";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import { UseFetch } from "../../components/UseFetch";

function Border({ borders }) {
  return (
    <Fragment>
      <div>
        <h1 className="font-bold text-2xl">Border Country:</h1>
        {borders
          ? borders.map((border) => {
              return (
                <Link key={border} className="p-3 text-blue-500" to={``}>
                  {border}
                </Link>
              );
            })
          : "No Border"}
      </div>
    </Fragment>
  );
}

export default Border;
