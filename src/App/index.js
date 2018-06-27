import React, { Component } from "react";
import styles from "./index.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
const moduleName = "App";
class App extends Component {
  render() {
    return <div className={cx(`${moduleName}`)}>app</div>;
  }
}

export default App;
