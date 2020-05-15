import React, { Component } from "react";
import ReactDOM from 'react-dom';
import App from './../App';
import Result from '../../result';
import { render, fireEvent, cleanup, waitForDomChange, getByText } from '@testing-library/react';
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
 
it("supplies invalid input when NaN input", async () => {
  const {getByTestId, debug, getByText } = render(<App></App>);
  const input = getByTestId('number-input');
  fireEvent.change(input, {target: {value: 'ee'}});
  getByText("Invalid input");
}); 

it("positive response when range and input changed to match", async () => {
  const {getByTestId, debug, getByText } = render(<App></App>);
  const input = getByTestId('number-input');
  fireEvent.change(input, {target: {value: '0'}});
  const setter = getByTestId('number-setter-form');
  fireEvent.change(setter, {target: {value: '0'}});
  const checkButton = getByTestId('check-button');
  fireEvent.click(checkButton);
  getByText('YOU DID IT! Answer was 0');
}); 

it("has negative response when range and input don't match", async () => {
  const {getByTestId, debug, getByText } = render(<App></App>);
  const input = getByTestId('number-input');
  fireEvent.change(input, {target: {value: '-1'}});
  const setter = getByTestId('number-setter-form');
  fireEvent.change(setter, {target: {value: '0'}});
  const checkButton = getByTestId('check-button');
  fireEvent.click(checkButton);
  getByText('Nooo wrong this time. Answer was 0');
}); 


it("resets when try again is clicked", async () => {
  const {getByTestId, debug, queryByTestId } = render(<App></App>);
  const input = getByTestId('number-input');
  fireEvent.change(input, {target: {value: '-1'}});
  const setter = getByTestId('number-setter-form');
  fireEvent.change(setter, {target: {value: '0'}});
  const checkButton = getByTestId('check-button');
  fireEvent.click(checkButton);
  const resetButton = getByTestId('try-again-button');
  fireEvent.click(resetButton);
  expect(queryByTestId('result')).toBeNull();
}); 