import React, { useState, useEffect } from "react";
import "./Home.scss";
import Header from "../Header/Header";
import QuizType from "../QuizType/QuizType";
import { getData } from "../../Firebase/firebaseApp";
import Button from "react-bootstrap/Button";
import RingLoader from "react-spinners/RingLoader";

const Home = ({ setSelectedTopic }) => {
  const [topics, setTopics] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const colors = ["primary", "secondary", "success", "warning", "danger"];

  useEffect(() => {
    setIsLoading(true);
    getData("collectionsName").then((list) => {
      setTopics(
        list[0].names.filter(
          (topic, index) => list[0].names.indexOf(topic) === index
        )
      );
      setIsLoading(false);
    });
  }, []);

  const override = `
  display: block;
  margin: 8rem auto 0 auto;
  border-color: red;
`;

  return (
    <>
      <RingLoader
        color={"#000"}
        loading={isLoading}
        css={override}
        size={150}
      />
      {topics && (
        <div className='d-flex flex-column align-items-center mt-5'>
          <>
            <h3 className='mb-3'>Let's play a qiuz!</h3>
            <QuizType
              key='random'
              quizType={"Random"}
              color='danger'
              setSelectedTopic={setSelectedTopic}
            />

            {topics.map((topic, index) => (
              <QuizType
                key={topic}
                quizType={topic}
                color={
                  index < colors.length
                    ? colors[index]
                    : colors[index % colors.length]
                }
                setSelectedTopic={setSelectedTopic}
              />
            ))}
          </>
        </div>
      )}
    </>
  );
};

export default Home;
