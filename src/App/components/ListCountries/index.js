import React, { Component } from "react";
import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const moduleName = "ListCountries";
const ListCountries = () => {
  return <div classNames={cx(`${moduleName}`)}>list countries</div>;
};
export default ListCountries;
