import React from "react";
import ReactDOM from 'react-dom';
import Form from './../Form';
import { isTSAnyKeyword } from "@babel/types";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Form></Form>, div)
})