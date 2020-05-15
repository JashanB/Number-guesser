import React from "react";
import ReactDOM from 'react-dom';
import App from './../App';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
});

it ("renders correctly", () => {
  const {getByTestId} = render(<App></App>);
  expect(getByTestId('app')).toHaveTextContent("Need a break?");
});

it("matches snapshot", () => {
  const tree = renderer.create(<App></App>).toJSON();
  expect(tree).toMatchSnapshot();
});