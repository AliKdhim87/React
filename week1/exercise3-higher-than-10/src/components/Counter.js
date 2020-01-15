import React, { useState } from "react";
import Button from "./layout/Button";
import Count from "./Count";
const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
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
      <Button increment={increment} />
    </div>
  );
};

export default Counter;
