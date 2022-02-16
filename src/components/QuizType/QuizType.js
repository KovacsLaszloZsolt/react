import React from "react";
import "./QuizType.scss";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const QuizType = ({ quizType, color, setSelectedTopic }) => {
  const handleQuizTypeOnClick = () => {
    // console.log(setSelectedTopic);
    setSelectedTopic(quizType);
  };
  return (
    <Link className='quiz-type-link-text w-75 mb-4' to='/game'>
      <Button className='w-100' variant={color} onClick={handleQuizTypeOnClick}>
        {quizType}
      </Button>
    </Link>
  );
};

export default QuizType;
