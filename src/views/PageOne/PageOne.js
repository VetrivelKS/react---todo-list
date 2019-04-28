import React, { Component } from "react";
// import "./App.css";
import {Todo} from '../Todo'

class PageOne extends Component {
  render() {
    return (
      <div className="page-one">
        <h1> Page One </h1>
        <Todo />

      </div>
    );
  }
}

export { PageOne }
export default PageOne