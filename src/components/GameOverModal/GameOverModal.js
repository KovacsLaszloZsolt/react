import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GameOverModal = ({ gameOver, lifeLeft, selectedTopic, setPlayAgain }) => {
  const handleOnClickYesBtn = () => {
    setPlayAgain(true);
  };
  return (
    <Modal
      show={gameOver}
      //   onHide={handleOnClickNoBtn}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        {lifeLeft ? (
          <>
            <h4>Congratulation!</h4>
          </>
        ) : (
          <>
            <h4>Game Over</h4>
          </>
        )}

        <p>Do you want play again a {selectedTopic} quiz?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleOnClickYesBtn}>Yes</Button>
        <Link to='/'>
          <Button>No</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default GameOverModal;
