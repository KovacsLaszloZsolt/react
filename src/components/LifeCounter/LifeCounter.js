import React, { useEffect, useState } from "react";
import { Heart, HeartFill } from "react-bootstrap-icons";

const LifeCounter = ({ numOfLife, lifeLeft }) => {
  const [lifes, setLifes] = useState(null);

  useEffect(() => {
    const life = [];
    for (let index = 0; index < numOfLife - lifeLeft; index++) {
      life.push(<Heart key={`broken` + index} className='mx-1' />);
    }
    for (let index = 0; index < lifeLeft; index++) {
      life.push(
        <HeartFill key={`heart` + index} className='text-danger mx-1' />
      );
    }

    setLifes(life);
  }, [lifeLeft, numOfLife]);

  return <div>{lifes}</div>;
};

export default LifeCounter;
