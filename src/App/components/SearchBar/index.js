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
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  sortCountries(sortInfo) {
    this.props.sortCountries(sortInfo);
  }
  handleChange(e) {
    this.setState({
      keyword: e.target.value
    });
  }
  handleKeyPress(e) {
    const { keyword } = this.state;
    // 눌려진 키가 Enter 면 검색
    if (e.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.props.searchData(keyword);
    }
  }
  render() {
    const { keyword } = this.state;
    return (
      <div className={cx(`${moduleName}`)}>
        List Countries
        <div className={cx(`${moduleName}-area`)}>
          <div className={cx(`${moduleName}-searchWrapper`)}>
            <input
              placeholder="Search"
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              value={keyword}
            />

            <div
              className={cx(`${moduleName}-searchWrapper-icon`)}
              onClick={() => this.props.searchData(keyword)}
            >
              <img src={"https://png.icons8.com/search/ffffff"} />
            </div>
          </div>
        </div>
        <div>
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
            onClick={() =>
              this.sortCountries({ type: "country", sort: "desc" })
            }
          >
            이름별 내림차순
          </button>
          <button onClick={() => this.props.clearSearch()}>
            초기 데이터 받기
          </button>
        </div>
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
