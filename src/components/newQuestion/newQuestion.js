import React from "react";
import Form from "react-bootstrap/Form";

const NewQuestion = ({ question, setQuestion }) => {
  return (
    <Form.Group className='mb-3' controlId='formQuestion'>
      <Form.Label>Question</Form.Label>
      <Form.Control
        type='text'
        placeholder='Enter your question'
        required
        value={question}
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
      <Form.Control.Feedback type='invalid'>
        Please enter a question.
      </Form.Control.Feedback>
    </Form.Group>
  );
};

export default NewQuestion;
