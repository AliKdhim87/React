import React from "react";

const Button = ({ getDogPhoto }) => {
  return (
    <div>
      <button className='btn btn-primary btn-block mb-2' onClick={getDogPhoto}>
        Get a dog!
      </button>
    </div>
  );
};
export default Button;
