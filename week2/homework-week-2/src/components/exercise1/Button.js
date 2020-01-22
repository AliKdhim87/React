import React from "react";

const Button = ({ getFriend }) => {
  return (
    <button onClick={getFriend} className='btn btn-primary btn-block'>
      Get a friend!
    </button>
  );
};
export default Button;
