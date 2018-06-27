import React, { Component } from "react";
import styles from "./index.scss";
import classNames from "classnames/bind";

import ListCountries from "./components/ListCountries";
import SearchBar from "./components/SearchBar";

const cx = classNames.bind(styles);
const moduleName = "App";
class App extends Component {
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        ListCountries Web app
        <SearchBar />
        <ListCountries />
      </div>
    );
  }
}

export default App;
