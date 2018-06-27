import React, { Component } from "react";
import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const moduleName = "SearchBar";
class SearchBar extends Component {
  render() {
    return <div className={cx(`${moduleName}`)}>SearchBar</div>;
  }
}

export default SearchBar;
