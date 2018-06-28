import React, { Component } from "react";
import styles from "./index.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);
const moduleName = "SearchBar";

class SearchBar extends Component {
  componentDidMount() {
    //처음 시작시, 나라정보를 받아온다.
    //this.props.loadCountries();
  }
  render() {
    return (
      <div className={cx(`${moduleName}`)}>
        SearchBar
        <div className={cx(`${moduleName}-area`)}>search area</div>
      </div>
    );
  }
}

export default SearchBar;
