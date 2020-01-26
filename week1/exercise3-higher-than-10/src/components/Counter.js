import React, { useState } from "react";
import Button from "./layout/Button";
import Count from "./Count";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleOnclick = () => {
    setCount(count + 1);
  };
  const feedback = () => {
    if (count > 10) {
      return "It's higher than 10!";
    } else {
      return "Keep counting...";
    }
  };
  return (
    <div>
      <h3>{feedback()}</h3>
      <Count count={count} />
      <Button handleOnclick={handleOnclick} />
    </div>
  );
};

export default Counter;
