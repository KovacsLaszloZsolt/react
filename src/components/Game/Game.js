import React from "react";
import "./Game.scss";
import Answer from "../Answer/Answer";
import Question from "../Question/Question";
import { useEffect, useState } from "react";
import Stack from "react-bootstrap/Stack";
import NextQuestionBtn from "../NextQuestionBtn/NextQuestionBtn";
// import Button from "react-bootstrap/Button";
import { getQuestionsForGame } from "../../Firebase/firebaseApp";
// import QuestionTypes from "../QuestionTypes/QuestionTypes";
import LifeCounter from "../LifeCounter/LifeCounter";
import ProgBar from "../ProgBar/ProgBar";
import GameOverModal from "../GameOverModal/GameOverModal";
import NoMoreQuestionModal from "../NoMoreQuestionModal/NoMoreQuestionModal";

const Game = ({ email, selectedTopic }) => {
  const numOfLife = 3;
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [numberOFCorrectAnswer, setNumberOFCorrectAnswer] = useState(0);
  const [lastQuestion, setLastQuestion] = useState(null);
  const [quizLength, setQuizLength] = useState(null);
  const [numberOfQuestion, setNumberOfQuestion] = useState(1);
  const [lifeLeft, setLifeLeft] = useState(numOfLife);
  const [gameOver, setGameOver] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);
  const [noMoreQuestion, setNoMoreQuestion] = useState(false);

  const getQuestions = (selectedTopic, email, lastQuestion) => {
    getQuestionsForGame(selectedTopic, email, lastQuestion).then((res) => {
      if (!res.docs.length) {
        setNoMoreQuestion(true);
        return;
      }

      const questions = [];
      res.forEach((item, index) => questions.push(item.data()));
      setQuizLength(questions.length);
      setCurrentQuestion(questions[0]);
      setQuestions(questions.slice(1));
      setLastQuestion(res.docs[res.docs.length - 1]);
      console.log(res.docs.length);
    });
  };

  useEffect(() => {
    if (selectedTopic) {
      getQuestions(selectedTopic, email, lastQuestion);
    }
  }, [selectedTopic]);

  useEffect(() => {
    if (playAgain) {
      getQuestions(selectedTopic, email, lastQuestion);
      setIsAnswered(false);
      setNumberOFCorrectAnswer(0);
      setNumberOfQuestion(1);
      setLifeLeft(numOfLife);
      setGameOver(false);
      setPlayAgain(false);
    }
  }, [playAgain]);

  useEffect(() => {
    if (!lifeLeft || (isAnswered && !questions.length)) {
      setGameOver(true);
    }
  }, [lifeLeft, isAnswered, questions]);

  return (
    <>
      <div className='d-flex justify-content-center flex-column'>
        {!(isAnswered && !questions.length) && !!lifeLeft && (
          <>
            {currentQuestion && (
              <Stack
                gap={3}
                className='col-md-5 mx-auto align-items-center w-75'
              >
                <ProgBar
                  quizLength={quizLength}
                  numberOfQuestion={numberOfQuestion}
                />
                <LifeCounter numOfLife={numOfLife} lifeLeft={lifeLeft} />

                <Question question={currentQuestion.question} />
                <Stack gap={1}>
                  {currentQuestion.answers.map((answer, index) => (
                    <Answer
                      key={index}
                      answer={answer.answer}
                      isCorrect={answer.isCorrect}
                      isAnswered={isAnswered}
                      setIsAnswered={setIsAnswered}
                      numberOFCorrectAnswer={numberOFCorrectAnswer}
                      setNumberOFCorrectAnswer={setNumberOFCorrectAnswer}
                      lifeLeft={lifeLeft}
                      setLifeLeft={setLifeLeft}
                    />
                  ))}
                </Stack>
                {isAnswered && questions.length && (
                  <div>
                    <NextQuestionBtn
                      setCurrentQuestion={setCurrentQuestion}
                      questions={questions}
                      setQuestions={setQuestions}
                      setIsAnswered={setIsAnswered}
                      numberOfQuestion={numberOfQuestion}
                      setNumberOfQuestion={setNumberOfQuestion}
                    />
                  </div>
                )}
              </Stack>
            )}
          </>
        )}

        <GameOverModal
          gameOver={gameOver}
          lifeLeft={lifeLeft}
          selectedTopic={selectedTopic}
          setPlayAgain={setPlayAgain}
        />

        <NoMoreQuestionModal show={noMoreQuestion} selectedTopic={selectedTopic}/>
      </div>
    </>
  );
};

export default Game;
