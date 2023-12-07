import React from "react";
import "./index.css";

const ThemeToggle = ({ label }) => {
  return (
    <div className="container">
      <span className="label">{label} </span>
      <div className="toggle-switch">
        <input type="checkbox" className="checkbox" name={label} id={label} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};

export default ThemeToggle;
