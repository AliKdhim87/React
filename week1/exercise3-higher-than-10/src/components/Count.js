import React from "react";

const Count = ({ count }) => {
  console.log(count);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default Count;
