import React from "react";
import Hobbies from "./Hobbies";
const HobbieList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing"
  ];
  return (
    <div>
      {hobbies.map((hobby, index) => (
        <Hobbies hobby={hobby} key={index} />
      ))}
    </div>
  );
};

export default HobbieList;
