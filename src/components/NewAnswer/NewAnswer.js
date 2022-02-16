import React from "react";
import Form from "react-bootstrap/Form";
import "./NewAnswer.css";

const NewAnswer = ({
  number,
  answer,
  setAnswer,
  correctAnswerNum,
  setCorrectAnswerNum,
}) => {
  const handleOnChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleRadioOnChange = (e) => {
    setCorrectAnswerNum(number);
  };
  return (
    <Form.Group className='mb-3 mx-3' controlId='formAnswer1'>
      <Form.Label>Answer #{number}</Form.Label>

      <div className='d-flex justify-content-between flex-wrap'>
        <div className='new-answer-ctn'>
          <Form.Control
            type='text'
            placeholder='Enter an answer'
            onChange={handleOnChange}
            value={answer}
            required
          />
          <Form.Control.Feedback className='w-100' type='invalid'>
            Please enter an answer.
          </Form.Control.Feedback>
        </div>
        <Form.Check
          type='radio'
          id='default-radio'
          className='ms-3 mt-2'
          name='isCorrect'
          onChange={handleRadioOnChange}
          checked={correctAnswerNum === number}
          required
        />
      </div>
    </Form.Group>
  );
};

export default NewAnswer;
