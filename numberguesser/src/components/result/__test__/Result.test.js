import React from "react";
import ReactDOM from 'react-dom';
import Result from './../Result';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Result></Result>, div)
});

it ("renders conditional response based on true answer", () => {
  const {getByTestId} = render(<Result compareAnswer={true} actualAnswer={5}></Result>);
  expect(getByTestId('result')).toHaveTextContent("YOU DID IT! Answer was 5");
});

it ("renders conditional response based on false answer", () => {
  const {getByTestId} = render(<Result compareAnswer={false} actualAnswer={5}></Result>);
  expect(getByTestId('result')).toHaveTextContent("Nooo wrong this time. Answer was 5");
});


it("matches snapshot", () => {
  const tree = renderer.create(<Result></Result>).toJSON();
  expect(tree).toMatchSnapshot();
});
