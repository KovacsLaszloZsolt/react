import "./App.css";
import Game from "./components/Game/Game";
import Header from "./components/Header/Header";
import { Routes, Route, Link } from "react-router-dom";
import MyQuestions from "./components/MyQuestions/MyQuestions";
// import Button from "react-bootstrap/Button";
import { useState } from "react";
import CreateNewQuestion from "./components/CreateNewQuestion/CreateNewQuestion";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div className='App'>
      {/* <Header currentUser={currentUser} setCurrentUser={setCurrentUser} /> */}
      {currentUser && <Header />}
      <Routes>
        {/* <Route path='/' element={<Login />} /> */}
        <Route
          path='/login'
          element={<Login setCurrentUser={setCurrentUser} />}
        />
        <Route
          path='/'
          element={
            <Home
              email={currentUser ? currentUser.email : ""}
              setSelectedTopic={setSelectedTopic}
            />
          }
        />
        <Route
          path='/game'
          element={
            <Game
              email='yzerman19c@gmail.com'
              // email={currentUser ? currentUser.email : ""}
              selectedTopic={selectedTopic}
            />
          }
        />
        <Route path='/signup' element={<SignUp />} />
        {currentUser && (
          <>
            <Route
              path='/my_questions'
              element={<MyQuestions email={currentUser.email} />}
            />
            <Route
              path='/create_new_question'
              element={<CreateNewQuestion email={currentUser.email} />}
            />
          </>
        )}
      </Routes>
      {/* <Game url={url} /> */}
    </div>
  );
}

export default App;
