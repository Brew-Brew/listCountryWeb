import React, { Component } from "react";
import classnames from "classnames/bind";
import { compose } from "recompose";
import { connect } from "react-redux";
import { sortCountries } from "src/redux/country/actions";

import styles from "./index.scss";
const cx = classnames.bind(styles);
const moduleName = "SearchBar";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.sortCountries = this.sortCountries.bind(this);
  }
  componentDidMount() {
    //처음 시작시, 나라정보를 받아온다.
    //this.props.loadCountries();
  }
  sortCountries(sortInfo) {
    this.props.sortCountries(sortInfo);
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        SearchBar
        <div className={cx(`${moduleName}-area`)}>검색폼</div>
        <button
          onClick={() => this.sortCountries({ type: "code", sort: "asc" })}
        >
          코드별 오름차순
        </button>
        <button
          onClick={() => this.sortCountries({ type: "code", sort: "asc" })}
        >
          코드별 내림차순
        </button>
        <button
          onClick={() => this.sortCountries({ type: "name", sort: "asc" })}
        >
          이름별 오름차순
        </button>
        <button
          onClick={() => this.sortCountries({ type: "name", sort: "desc" })}
        >
          이름별 내림차순
        </button>
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
      sortCountries
    }
  )
)(SearchBar);
