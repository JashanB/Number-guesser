import React, { useState, useEffect } from "react";
import './App.css';
import Form from '../form';
import NumberSetter from '../numberSetter';
import Result from '../result';

function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [range, setRange] = useState(10);
  const [compareAnswer, setCompareAnswer] = useState(false);
  const [actualAnswer, setActualAnswer] = useState(-1);
  const [checkAnswer, setCheckAnswer] = useState(false);
  const [restart, setRestart] = useState(false);

  const makeRandomNumber = function (max) {
    if (max > 1) {
      return Math.floor(Math.random() * Math.floor(max));
    } else {
      return Math.round(Math.random());
    }
  };

  useEffect(() => {
    let newNumber = makeRandomNumber(range);
    setActualAnswer(state => newNumber);
  }, [range, restart]);

  return (
    <div className="App" data-testid="app">
      <h2>Need a break?</h2>
      <h3> Guess a number out of {range}</h3>
      <Form
        checkAnswer={checkAnswer}
        setCheckAnswer={setCheckAnswer}
        actualAnswer={actualAnswer}
        compareAnswer={compareAnswer}
        setCompareAnswer={setCompareAnswer}
        inputNumber={inputNumber}
        setInputNumber={setInputNumber}
      />
      <NumberSetter
        range={range}
        setRange={setRange}
      />
      {checkAnswer &&
        <h4>Answer:</h4> &&
        <Result
          restart={restart}
          setRestart={setRestart}
          actualAnswer={actualAnswer}
          compareAnswer={compareAnswer}
          setCheckAnswer={setCheckAnswer}
          range={range}
          setRange={setRange}
          setInputNumber={setInputNumber}
        />}
    </div>
  );
}

export default App;
