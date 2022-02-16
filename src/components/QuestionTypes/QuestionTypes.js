import React, { useState, useEffect } from "react";
import "./QuestionTypes.scss";
import { getData } from "../../Firebase/firebaseApp";
import Form from "react-bootstrap/Form";

const QuestionTypes = ({
  selectedTopic,
  setSelectedTopic,
  addNewTopic,
  setTopicIsExist,
}) => {
  const [topics, setTopics] = useState(null);

  useEffect(() => {
    getData("collectionsName").then((list) => {
      setTopics(
        list[0].names.filter(
          (topic, index) => list[0].names.indexOf(topic) === index
        )
      );
    });

    //   return () => {
    //       cleanup
    //   }
  }, []);

  const handleOnChange = (e) => {
    setSelectedTopic(e.target.value);
    if (setTopicIsExist) {
      setTopicIsExist(false);
    }
  };
  return (
    <>
      {topics && (
        <Form.Select
          required
          className='my-3 topic-select'
          aria-label='Topic select'
          onChange={handleOnChange}
          value={selectedTopic}
        >
          <option value=''>Choose a topic of questions</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
          {addNewTopic && (
            <option value='new topic' key='new_topic'>
              Add new topic
            </option>
          )}
        </Form.Select>
      )}
    </>
  );
};

export default QuestionTypes;
