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
      {hobbies.map(hobbie => (
        <Hobbies hobbie={hobbie} />
      ))}
    </div>
  );
};

export default HobbieList;
