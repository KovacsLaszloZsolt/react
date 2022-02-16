import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { deleteQuestion, getUserQuestions } from "../../Firebase/firebaseApp";

const ComfirmDeleteQuestionModal = ({
  modalShow,
  setModalShow,
  selectedTopic,
  id,
  email,
  setUserQuestions,
}) => {
  const handleOnClickYesBtn = () => {
    setModalShow(false);
    deleteQuestion(selectedTopic, id).then(
      getUserQuestions(selectedTopic, email).then((res) => {
        setUserQuestions(res);
      })
    );
  };

  const handleOnClickNoBtn = () => {
    setModalShow(false);
  };
  return (
    <Modal
      show={modalShow}
      //   onHide={handleOnClickNoBtn}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <p>Are you sure want to delete this question?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleOnClickYesBtn}>Yes</Button>
        <Button onClick={() => setModalShow(false)}>No</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ComfirmDeleteQuestionModal;
