import React from "react";

const Joke = ({ joke }) => {
  console.log(joke);
  return (
    <div className='text-center border mt-5 p-3'>
      <p className='lead'>{joke.setup}</p>
      <p className='lead'>{joke.punchline}</p>
    </div>
  );
};
export default Joke;
