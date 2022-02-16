import React from "react";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Logo from "../Logo/Logo";
import "./SignUp.scss";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className='sign-up-ctn pt-5'>
      <Logo className='signup-logo' />
      <Form className='sign-up-form d-flex flex-column align-items-center w-100 mt-5'>
        <Form.Group className='mb-3 w-100' controlId='formBasicEmail'>
          <FloatingLabel
            controlId='floatingInput'
            label='Email address'
            className='mb-3'
          >
            <Form.Control type='email' placeholder='name@example.com' />
          </FloatingLabel>
          <FloatingLabel controlId='floatingPassword' label='Password'>
            <Form.Control type='password' placeholder='Password' />
          </FloatingLabel>
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Check me out' />
        </Form.Group>
        <Button variant='primary' type='submit' className='w-75 mt-4'>
          Sign Up
        </Button>
        <Link className='mt-3 helping-text' to='/login'>
          <span>if you have already account click here</span>
        </Link>
      </Form>
    </div>
  );
};

export default SignUp;
