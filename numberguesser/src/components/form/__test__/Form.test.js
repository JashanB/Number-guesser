import React from "react";
import ReactDOM from 'react-dom';
import Form from './../Form';
import Button from './../Form';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

const setup = () => {
  const form = render(<Form inputNumber={5}></Form>);
  const input = form.getByTestId('number-input');
  return {
    input,
    ...form
  }
}
afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Form></Form>, div)
})

it ("renders button correctly", () => {
  const {getByTestId} = render(<Button></Button>);
  expect(getByTestId('check-button')).toHaveTextContent("Check!")
})

it ("renders form correctly with passed down input", () => {
  const form = render(<Form inputNumber={5}></Form>);
  const input = form.getByTestId('number-input');
  expect(input.value).toBe("5")
})

// it ("changes input value", () => {
//   const form = render(<Form inputNumber={5}></Form>);
//   const input = form.getByTestId('number-input');
//   fireEvent.change(input, {target: {value: "10"}})
//   expect(form).toHaveValue("10")
// })
it("matches snapshot", () => {
  const tree = renderer.create(<Form inputNumber={5}></Form>).toJSON();
  expect(tree).toMatchSnapshot();
})