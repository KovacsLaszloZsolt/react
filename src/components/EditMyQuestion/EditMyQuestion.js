import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NewQuestion from "../newQuestion/newQuestion";
import NewAnswer from "../NewAnswer/NewAnswer";
import { updateDocument } from "../../Firebase/firebaseApp";

const EditMyQuestion = ({
  questionObj,
  topic,
  setEditQuestionId,
  setReload,
}) => {
  const [question, setQuestion] = useState(questionObj.question);
  const [answer1, setAnswer1] = useState(questionObj.answers[0].answer);
  const [answer2, setAnswer2] = useState(questionObj.answers[1].answer);
  const [answer3, setAnswer3] = useState(questionObj.answers[2].answer);
  const [answer4, setAnswer4] = useState(questionObj.answers[3].answer);
  const [correctAnswerNum, setCorrectAnswerNum] = useState(
    questionObj.answers.findIndex((answer) => answer.isCorrect === true)
  );

  const handleOnClickUpdateBtn = (e) => {
    const form = e.currentTarget;
    e.preventDefault();
    e.stopPropagation();

    if (form.checkValidity() === true) {
      const updatedQuestion = {
        question: question,
        answers: [
          {
            answer: answer1,
            isCorrect: correctAnswerNum === 0 ? true : false,
          },
          {
            answer: answer2,
            isCorrect: correctAnswerNum === 1 ? true : false,
          },
          {
            answer: answer3,
            isCorrect: correctAnswerNum === 2 ? true : false,
          },
          {
            answer: answer4,
            isCorrect: correctAnswerNum === 3 ? true : false,
          },
        ],
        ownerEmail: questionObj.ownerEmail,
      };
      updateDocument(topic, questionObj.id, updatedQuestion).then(() => {
        console.log(updatedQuestion);
        setEditQuestionId(null);
        setReload(true);
      });
    }
  };

  return (
    <div>
      <Form>
        <NewQuestion question={question} setQuestion={setQuestion} />
        <NewAnswer
          number={0}
          answer={answer1}
          setAnswer={setAnswer1}
          correctAnswerNum={correctAnswerNum}
          setCorrectAnswerNum={setCorrectAnswerNum}
        />
        <NewAnswer
          number={1}
          answer={answer2}
          setAnswer={setAnswer2}
          correctAnswerNum={correctAnswerNum}
          setCorrectAnswerNum={setCorrectAnswerNum}
        />
        <NewAnswer
          number={2}
          answer={answer3}
          setAnswer={setAnswer3}
          correctAnswerNum={correctAnswerNum}
          setCorrectAnswerNum={setCorrectAnswerNum}
        />
        <NewAnswer
          number={3}
          answer={answer4}
          setAnswer={setAnswer4}
          correctAnswerNum={correctAnswerNum}
          setCorrectAnswerNum={setCorrectAnswerNum}
        />
        <Button
          variant='primary'
          type='submit'
          onClick={handleOnClickUpdateBtn}
        >
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditMyQuestion;
