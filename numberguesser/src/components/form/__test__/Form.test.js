import React from "react";
import ReactDOM from 'react-dom';
import Form from './../Form';
import Button from './../Form';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Form></Form>, div)
})

it ("renders button correctly", () => {
  const {getByTestId} = render(<Button></Button>);
  expect(getByTestId('check-button')).toHaveTextContent("Check!")
})