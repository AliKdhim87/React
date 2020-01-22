import React, { useState, useEffect } from "react";
import Joke from "./Joke";
import Spinner from "../layout/Spinner";
import Error from "../layout/Error";
const RandomJoke = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasErorr, setHasErorr] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const joke = await res.json();
        setJoke(joke);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setHasErorr(true);
        setLoading(false);
      }
    })();
  }, []);
  if (hasErorr) return <Error />;
  if (loading) return <Spinner />;

  return (
    <div>
      <Joke joke={joke} />
    </div>
  );
};
export default RandomJoke;
