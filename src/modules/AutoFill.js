import React from "react";

const AutoFill = ({ data, query, selected }) =>
  selected >= 0 && data[selected].match === 0 ? (
    <div className="result-autofill">
      {query + data[selected].name.substr(query.length)}
      <span className="result-gdlname">{data[selected].menu}</span>
    </div>
  ) : (
    <div className="result-autofill" />
  );

export default AutoFill;
