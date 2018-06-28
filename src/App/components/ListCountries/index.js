import React, { Component } from "react";
import styles from "./index.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
const moduleName = "ListCountries";

const ListCountries = ({ countries }) => {
  return (
    <div classnames={cx(`${moduleName}`)}>
      list countries
      <div className={cx(`${moduleName}-header`)}>
        <h4>code</h4>
        <h4>country</h4>
      </div>
      {countries.length > 0 &&
        countries.map(country => (
          <div className={cx(`${moduleName}-wrapper`)}>
            <p>{country.code}</p>
            <p>{country.country}</p>
          </div>
        ))}
    </div>
  );
};

export default ListCountries;
