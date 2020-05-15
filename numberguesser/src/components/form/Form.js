import React from "react";
import './Form.css';

export function Button(props) {
  if (props.inputNumber <= props.range && (props.inputNumber === 0 || props.inputNumber)) {
    return (
      <button data-testid="check-button" className="check-button" onClick={function () {
        if (props.checkAnswer === false) {
          props.setCheckAnswer(state => (true));
          if (props.actualAnswer == props.inputNumber) {
            props.setCompareAnswer(state => (true));
          } else {
            props.setCompareAnswer(state => (false));
          }
        }
      }
      }
      >Check!</button>
    )
  } else {
    return (<span>Invalid input</span>);
  }
}

export default function Form(props) {
  return (
    <div className="input-your-guess" data-testid="input-form-container">
      <form data-testid="input-form" autoComplete="off" onSubmit={event => event.preventDefault()}>
        <input
          className="guess-number"
          type="number"
          placeholder="Guess a number!"
          onChange={(event) => {
            props.setInputNumber(event.target.value)
          }
          }
          value={props.inputNumber}
          data-testid="number-input"
        />
      </form>
      <Button range={props.range} setCheckAnswer={props.setCheckAnswer} checkAnswer={props.checkAnswer} inputNumber={props.inputNumber} actualAnswer={props.actualAnswer} setCompareAnswer={props.setCompareAnswer} />
    </div>
  )
}