import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import React from "react";
import LoginImg from "../../images/login_image.png";
import "./Login.scss";
import Button from "react-bootstrap/Button";
import { Github, Facebook, Google } from "react-bootstrap-icons";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../Logo/Logo";
import { signInGoogle, auth, provider } from "../../Firebase/firebaseAuth";

const Login = ({ setCurrentUser }) => {
  const navigate = useNavigate();
  const handleGoogleLogin = () => {
    signInGoogle(auth, provider).then((data) => {
      setCurrentUser(data);
      navigate("/");
    });
  };

  return (
    <Stack className='align-items-center mt-5'>
      <Logo />
      <img src={LoginImg} alt='login-img' className='mt-3 login-img' />
      <Form className='d-flex flex-column align-items-center mt-5 login-form'>
        <Form.Control
          type='email'
          placeholder='Enter your email address'
          aria-label='email address'
          className='mb-2'
        />
        <Form.Control
          type='password'
          placeholder='Enter your password'
          aria-label='password'
        />
        <Button variant='primary' className='w-75 mt-4'>
          Login
        </Button>
      </Form>
      <Link to='/signup' className='text-secondary'>
        <span>Or sign up</span>
      </Link>
      <div className='mt-5 third-part-login-ctn'>
        <p>Login with:</p>
        <Github className='mx-2' />
        <Facebook className='mx-2' />
        <Google className='mx-2' onClick={handleGoogleLogin} />
      </div>
    </Stack>
    // <Box
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //   }}
    //   className='login-ctn'
    // >
    //   <TextField id='outlined-basic' label='Email address' variant='outlined' />
    //   <Button variant='contained' className='login-btn'>
    //     Login
    //   </Button>
    //   <Box>
    //     <GoogleIcon />
    //     <FacebookIcon />
    //     <GitHubIcon />
    //   </Box>
    // </Box>
  );
};

export default Login;
