import React, { useEffect, useState } from "react";
import "./ProgBar.scss";
import ProgressBar from "react-bootstrap/ProgressBar";

const ProgBar = ({ quizLength, numberOfQuestion }) => {
  const [quizProgress, setQuizProgress] = useState(null);

  useEffect(() => {
    setQuizProgress(Math.floor((100 / quizLength) * numberOfQuestion));
  }, [quizLength, numberOfQuestion]);
  return (
    <div className='w-100 mt-5 mb-3 progress-bar-ctn'>
      <ProgressBar className='w-75' now={quizProgress} />
      <span>
        {numberOfQuestion} / {quizLength}
      </span>
    </div>
  );
};

export default ProgBar;
