import React from "react";
import Button from "react-bootstrap/Button";
import { useState } from "react";

const NextQuestionBtn = ({
  setCurrentQuestion,
  questions,
  setQuestions,
  setIsAnswered,
  numberOfQuestion,
  setNumberOfQuestion,
}) => {
  const [nextQuestionId, setNextQuestionId] = useState(null);

  const getRandomQuestionNumber = (arrLength) => {
    return Math.floor(Math.random() * arrLength);
  };

  const handleNextQuestionOnClick = () => {
    const questionId = getRandomQuestionNumber(questions.length);
    // console.log(questions[questionId]);
    setCurrentQuestion(questions[questionId]);
    setQuestions(questions.filter((item, index) => index !== questionId));
    setIsAnswered(false);
    setNumberOfQuestion(numberOfQuestion + 1);
  };
  return (
    <Button
      onClick={handleNextQuestionOnClick}
      type='button'
      variant={"dark"}
      size='sm'
      className='mt-3'
    >
      Next question
    </Button>
  );
};

export default NextQuestionBtn;
