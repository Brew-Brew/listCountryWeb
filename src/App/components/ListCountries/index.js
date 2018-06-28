import React, { Component } from "react";
import styles from "./index.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
const moduleName = "ListCountries";

const ListCountries = ({ countries }) => {
  //{ , , } => [{}.{},{}]형태로 바꿔주기 위한것이다.
  const countryArr = Object.keys(countries)
    .map(key => [{ key: key, country: countries[key] }])
    .map(arr => arr[0]);

  console.log(countryArr);
  return (
    <div classnames={cx(`${moduleName}`)}>
      list countries
      <div className={cx(`${moduleName}-header`)}>
        <h4>code</h4>
        <h4>country</h4>
      </div>
      {countryArr.map(country => (
        <div className={cx(`${moduleName}-wrapper`)}>
          <p>{country.key}</p>
          <p>{country.country}</p>
        </div>
      ))}
    </div>
  );
};

export default ListCountries;
