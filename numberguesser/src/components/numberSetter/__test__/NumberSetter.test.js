import React from "react";
import ReactDOM from 'react-dom';
import NumberSetter from './../NumberSetter';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

afterEach(cleanup);
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<NumberSetter></NumberSetter>, div)
});

it ("renders correctly with passed down input", () => {
  const setter = render(<NumberSetter range={5}></NumberSetter>);
  const input = setter.getByTestId('number-setter-form');
  expect(input.value).toBe("5");
});

it("matches snapshot", () => {
  const tree = renderer.create(<NumberSetter range={5}></NumberSetter>).toJSON();
  expect(tree).toMatchSnapshot();
});


