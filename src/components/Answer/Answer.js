import React, { useState, useEffect } from "react";
import "./Answer.scss";
import { CheckCircleFill, XCircleFill, XLg } from "react-bootstrap-icons";

const Answer = ({
  answer,
  isCorrect,
  isAnswered,
  setIsAnswered,
  numberOFCorrectAnswer,
  setNumberOFCorrectAnswer,
  lifeLeft,
  setLifeLeft,
}) => {
  const [iconColor, setIconColor] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isAnswered && !isClicked && isCorrect) {
      setIconColor("yellow");
    }
    if (!isAnswered) {
      setIconColor(null);
      setIsClicked(false);
    }
  }, [isAnswered, isClicked, isCorrect]);

  const handleOnClick = () => {
    if (!isAnswered) {
      if (isCorrect) {
        setIconColor("green");
        setNumberOFCorrectAnswer(numberOFCorrectAnswer + 1);
      } else {
        setLifeLeft(lifeLeft - 1);
      }
      setIsClicked(true);
      setIsAnswered(true);
    }
  };
  return (
    <p
      className='w-100 answer d-flex align-items-center justify-content-between'
      onClick={handleOnClick}
    >
      {answer}
      {isAnswered && isClicked && isCorrect && (
        <CheckCircleFill className='me-3' color={iconColor} />
      )}
      {isAnswered && !isClicked && isCorrect && (
        <CheckCircleFill className='me-3' color={iconColor} />
      )}
      {isAnswered && isClicked && !isCorrect && (
        <XCircleFill className='me-3' color={"red"} />
      )}
    </p>
  );
};

export default Answer;
