import React, { Component } from "react";
import classnames from "classnames/bind";
import { compose } from "recompose";
import { connect } from "react-redux";
import { sortCountries } from "src/redux/country/actions";
import { searchData, clearSearch } from "src/redux/meta/actions";

import styles from "./index.scss";
const cx = classnames.bind(styles);
const moduleName = "SearchBar";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
    this.sortCountries = this.sortCountries.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {}
  sortCountries(sortInfo) {
    this.props.sortCountries(sortInfo);
  }
  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }
  render() {
    const { keyword } = this.state;
    return (
      <div className={cx(`${moduleName}`)}>
        List Countries
        <div className={cx(`${moduleName}-area`)}>
          <input
            placeholder="검색"
            onChange={this.handleChange}
            value={keyword}
          />
          <button onClick={() => this.props.searchData(keyword)}>검색</button>
        </div>
        <button
          onClick={() => this.sortCountries({ type: "code", sort: "asc" })}
        >
          코드별 오름차순
        </button>
        <button
          onClick={() => this.sortCountries({ type: "code", sort: "desc" })}
        >
          코드별 내림차순
        </button>
        <button
          onClick={() => this.sortCountries({ type: "country", sort: "asc" })}
        >
          이름별 오름차순
        </button>
        <button
          onClick={() => this.sortCountries({ type: "country", sort: "desc" })}
        >
          이름별 내림차순
        </button>
        <button onClick={() => this.props.clearSearch()}>
          초기 데이터 다시 받아오기
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
      sortCountries,
      searchData,
      clearSearch
    }
  )
)(SearchBar);
