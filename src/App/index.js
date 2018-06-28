import React, { Component } from "react";
import { connect } from "react-redux";

import styles from "./index.scss";
import classnames from "classnames/bind";
import { compose } from "recompose";

import { loadCountries } from "src/redux/country/actions";

import ListCountries from "./components/ListCountries";
import SearchBar from "./components/SearchBar";

const cx = classnames.bind(styles);
const moduleName = "App";

class App extends Component {
  componentDidMount() {
    //처음 시작시, 나라정보를 받아온다.
    this.props.loadCountries();
  }
  render() {
    const { country, meta } = this.props;
    return (
      <div className={cx(`${moduleName}`)}>
        <SearchBar />
        {country.loading && !country.data ? (
          <div>loading...</div>
        ) : (
          <ListCountries
            countries={
              country.filteredData ? country.filteredData : country.data
            }
          />
        )}
      </div>
    );
  }
}

export default compose(
  connect(
    ({ meta, country }) => ({
      meta,
      country
    }),
    {
      loadCountries
    }
  )
)(App);
