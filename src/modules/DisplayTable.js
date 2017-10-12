import React from "react";
import { Link } from "react-router";

const DisplayTable = ({ data, query, selected }) => {
  const rows = data.map(key => {
    const seg = key.name.toLowerCase().indexOf(query.toLowerCase());
    const stylename = key === selected ? "result-item selected" : "result-item";

    return (
      <Link className={stylename} to={key.route} key={key.key}>
        {key.name.slice(0, seg)}
        <span className="result-query">
          {key.name.substr(seg, query.length)}
        </span>
        {key.name.substr(seg + query.length)}
        <span className="result-gdlname">{key.menu}</span>
      </Link>
    );
  });

  return <div className="result">{rows}</div>;
};

export default DisplayTable;
