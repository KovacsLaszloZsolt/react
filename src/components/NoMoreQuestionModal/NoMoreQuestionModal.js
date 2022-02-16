import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import "./NoMoreQuestionModal.scss";

const NoMoreQuestionModal = ({ show, selectedTopic }) => {
  return (
    <Modal
      show={show}
      //   onHide={handleOnClickNoBtn}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <p>You have answered all the {selectedTopic} questions</p>
      </Modal.Body>
      <Modal.Footer>
        <Link to='/'>
          <Button>Please choose a new topic</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default NoMoreQuestionModal;
