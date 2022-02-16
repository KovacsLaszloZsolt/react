import React, { useEffect, useState } from "react";
import "./MyQuestions.css";
import QuestionTypes from "../QuestionTypes/QuestionTypes";
import { getUserQuestions, deleteQuestion } from "../../Firebase/firebaseApp";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import EditMyQuestion from "../EditMyQuestion/EditMyQuestion";
import ComfirmDeleteQuestionModal from "../ComfirmDeleteQuestionModal/ComfirmDeleteQuestionModal";

const My_questions = ({ email }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [userQuestions, setUserQuestions] = useState(null);
  const [editQuestionId, setEditQuestionId] = useState(null);
  const [reset, setReset] = useState(false);
  const [reload, setReload] = useState(false);
  const [delQuestionId, setDelQuestionId] = useState(null);
  const [delModalShow, setDelModalShow] = useState(false);

  useEffect(() => {
    if (selectedTopic || reload) {
      getUserQuestions(selectedTopic, email).then((res) => {
        setUserQuestions(res);
      });
      if (reload) {
        setReload(false);
      }
    }
  }, [selectedTopic, email, reload]);

  useEffect(() => {
    setUserQuestions((prevUserQuestion) => prevUserQuestion);
  }, [reset]);

  const handleDeleteQuestion = (id) => {
    deleteQuestion(selectedTopic, id).then(
      getUserQuestions(selectedTopic, email).then((res) => {
        setUserQuestions(res);
      })
    );
  };
  return (
    <div>
      <QuestionTypes setSelectedTopic={setSelectedTopic} />

      {userQuestions && (
        <ListGroup className='mt-3'>
          {userQuestions.map((questionObj) => (
            <ListGroup.Item key={questionObj.id}>
              <div className='d-flex justify-content-between align-items-center'>
                {editQuestionId !== questionObj.id && (
                  <p className='my-question'>{questionObj.question}</p>
                )}
                <div className='ms-auto'>
                  <Button
                    variant='link'
                    className='text-warning'
                    onClick={() => {
                      if (editQuestionId === questionObj.id) {
                        setEditQuestionId(null);
                      } else {
                        setEditQuestionId(questionObj.id);
                      }
                      setReset(true);
                    }}
                  >
                    {(!editQuestionId || editQuestionId !== questionObj.id) &&
                      "edit"}
                    {editQuestionId === questionObj.id && "cancel"}
                  </Button>
                  <Button
                    variant='link'
                    className='text-danger'
                    onClick={() => {
                      setDelQuestionId(questionObj.id);
                      setDelModalShow(true);
                    }}
                  >
                    delete
                  </Button>
                </div>
              </div>
              {editQuestionId === questionObj.id && (
                <div>
                  <EditMyQuestion
                    questionObj={questionObj}
                    topic={selectedTopic}
                    setEditQuestionId={setEditQuestionId}
                    setReload={setReload}
                  />
                </div>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>
      )}
      <ComfirmDeleteQuestionModal
        modalShow={delModalShow}
        setModalShow={setDelModalShow}
        selectedTopic={selectedTopic}
        id={delQuestionId}
        email={email}
        setUserQuestions={setUserQuestions}
      />
    </div>
  );
};

export default My_questions;
