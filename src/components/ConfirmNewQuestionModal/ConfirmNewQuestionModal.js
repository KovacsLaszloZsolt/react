import React from "react";
import "./ConfirmNewQuestionModal.scss";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const ConfirmNewQuestionModal = ({ show, setModalShow }) => {
  // const handleOnClickNoBtn = () => {
  //   setModalShow(false);
  // };
  const handleOnClickYesBtn = () => {
    setModalShow(false);
  };
  return (
    <Modal
      show={show}
      //   onHide={handleOnClickNoBtn}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Body>
        <h4>The new question has been added to the quiz</h4>
        <p>Do you want to create a new question?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleOnClickYesBtn}>Yes</Button>
        <Link to='/my_questions'>
          <Button>No</Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfirmNewQuestionModal;

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size='lg'
//       aria-labelledby='contained-modal-title-vcenter'
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id='contained-modal-title-vcenter'>
//           Modal heading
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <h4>Centered Modal</h4>
//         <p>
//           Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//           dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//           consectetur ac, vestibulum at eros.
//         </p>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button onClick={props.onHide}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// function App() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant='primary' onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }

// render(<App />);
