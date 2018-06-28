import React, { Component } from "react";
import { connect } from "react-redux";
import { ThreeBounce } from "better-react-spinkit";

import styles from "./index.scss";
import classnames from "classnames/bind";
import { compose } from "recompose";

import { loadCountries } from "src/redux/country/actions";

import ListCountries from "./components/ListCountries";
import SearchBar from "./components/SearchBar";

const cx = classnames.bind(styles);
const moduleName = "App";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingForDelay: true
    };
  }

  componentDidMount() {
    //처음 시작시, 나라정보를 받아온다.
    this.props.loadCountries();
  }
  shouldComponentUpdate(nextProps) {
    const { country } = nextProps;
    if (country.loading !== this.props.country.loading && country.loading) {
      //data가 빨리 받아와져서, 로딩을 보여주기 위해 delgay를 걸었다.
      setTimeout(() => this.setState({ loadingForDelay: false }), 1500);
    }
    return true;
  }
  render() {
    const { loadingForDelay } = this.state;
    const { country } = this.props;
    return (
      <div className={cx(`${moduleName}`)}>
        <SearchBar />
        {loadingForDelay ? (
          <div className={cx(`${moduleName}-loading`)}>
            로딩중입니다. <ThreeBounce size={15} color="#2e2744" />
          </div>
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
