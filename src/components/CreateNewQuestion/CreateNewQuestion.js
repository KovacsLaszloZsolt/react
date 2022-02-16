import React, { useState, useRef } from "react";
import QuestionTypes from "../QuestionTypes/QuestionTypes";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {
  addToDatabase,
  getData,
  updateDocument,
} from "../../Firebase/firebaseApp";
import NewAnswer from "../NewAnswer/NewAnswer";
import ConfirmNewQuestionModal from "../ConfirmNewQuestionModal/ConfirmNewQuestionModal";
import NewQuestion from "../newQuestion/newQuestion";

const CreateNewQuestion = ({ email }) => {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [isAdd, setIsAdd] = useState(false);
  const [topicIsExist, setTopicIsExist] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  const [correctAnswerNum, setCorrectAnswerNum] = useState(null);
  const newTopicRef = useRef();
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      const newQuestion = {
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
        ownerEmail: email,
      };

      if (newTopicRef.current) {
        addToDatabase(newTopicRef.current.value, newQuestion);

        getData("collectionsName").then((list) => {
          if (!list[0].names.includes(newTopicRef.current.value)) {
            updateDocument("collectionsName", "list", {
              names: [
                ...list[0].names.filter(
                  (topic, index) => list[0].names.indexOf(topic) === index
                ),
                newTopicRef.current.value,
              ],
            });
          }
        });
      } else {
        addToDatabase(selectedTopic, newQuestion);
      }

      setSelectedTopic("");
      setIsAdd(false);
      setTopicIsExist(false);
      setQuestion("");
      setAnswer1("");
      setAnswer2("");
      setAnswer3("");
      setAnswer4("");
      setCorrectAnswerNum(null);
      setModalShow(true);
      setValidated(false);
    } else {
      setValidated(true);
    }
  };

  const handleNewTopicAddOnClick = () => {
    getData("collectionsName").then((list) => {
      if (
        list[0].names
          .map((topic) => topic.toLowerCase())
          .includes(newTopicRef.current.value.toLowerCase())
      ) {
        setSelectedTopic("");
        setTopicIsExist(true);
      } else {
        // setNewTopic(newTopicRef.current.value);
        setIsAdd(true);
      }
    });
  };
  const handelNewTopicOnClickCancel = () => {
    setSelectedTopic("");
  };

  return (
    <div>
      <Form
        className='mt-3'
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        {selectedTopic !== "new topic" && (
          <QuestionTypes
            selectedTopic={selectedTopic}
            setSelectedTopic={setSelectedTopic}
            addNewTopic={true}
            setTopicIsExist={setTopicIsExist}
          />
        )}
        {topicIsExist && (
          <p className='text-danger mt-2 ms-2'>Topic is already in the list!</p>
        )}
        <Form.Control.Feedback type='invalid'>
          Please choose a topic.
        </Form.Control.Feedback>
        {selectedTopic === "new topic" && (
          <Form.Group className='mb-3' controlId='formTopic'>
            <Form.Label>Topic</Form.Label>
            <Form.Control
              className='d-inline'
              type='text'
              placeholder='Enter new topic'
              disabled={isAdd}
              ref={newTopicRef}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Please enter a topic.
            </Form.Control.Feedback>
            {!isAdd && (
              <div className='d-flex justify-content-end mt-2'>
                <Button
                  variant='warning'
                  type='button'
                  onClick={handelNewTopicOnClickCancel}
                >
                  Cancel
                </Button>
                <Button
                  variant='primary'
                  type='button'
                  onClick={handleNewTopicAddOnClick}
                >
                  Add
                </Button>
              </div>
            )}
          </Form.Group>
        )}
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
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
      <ConfirmNewQuestionModal show={modalShow} setModalShow={setModalShow} />
    </div>
  );
};

export default CreateNewQuestion;
