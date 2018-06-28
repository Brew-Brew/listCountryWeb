import React, { Component } from "react";
import styles from "./index.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
const moduleName = "ListCountries";

const ListCountries = ({ countries }) => {
  return (
    <div classnames={cx(`${moduleName}`)}>
      <div className={cx(`${moduleName}-header`)}>
        <h4>Code</h4>
        <h4>Country</h4>
      </div>
      {countries.length > 0 &&
        countries.map(country => (
          <div className={cx(`${moduleName}-wrapper`)}>
            <p>{country.code}</p>
            <p>{country.country}</p>
          </div>
        ))}
      {countries.length === 0 && (
        <div className={cx(`${moduleName}-noData`)}>
          데이터가 없습니다 :( <br />다시 검색해주세요
        </div>
      )}
    </div>
  );
};

export default ListCountries;
