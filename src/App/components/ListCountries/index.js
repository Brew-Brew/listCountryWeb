import React, { Component } from "react";
import styles from "./index.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
const moduleName = "ListCountries";

const ListCountries = ({ countries }) => {
  const countyArr = Object.keys(countries).map(key => [
    { key: key, countries: countries[key] }
  ]);
  console.log(countyArr);
  return (
    <div classnames={cx(`${moduleName}`)}>
      list countries
      {countyArr.map(country => (
        <div className={cx(`${moduleName}-wrapper`)}>
          <p>{country[0].key}</p>
          <p>{country[0].countries}</p>
        </div>
      ))}
    </div>
  );
};

export default ListCountries;
