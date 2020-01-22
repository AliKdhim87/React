import React, { useState, useEffect } from "react";
import FriendProfile from "./FriendProfile";
import Button from "./Button";
import Spinner from "../layout/Spinner";
import Error from "../layout/Error";
const Friend = () => {
  const [friend, setFriend] = useState({});
  const [loading, setLoading] = useState(true);
  const [hasErorr, setHasErorr] = useState(false);
  // Similar to componentDidMount and componentDidUpdate:
  const getFriend = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");

      const data = await response.json();
      const [item] = data.results;
      setFriend(item);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setHasErorr(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    getFriend();
    // eslint-disable-next-line
  }, []);
  if (hasErorr) return <Error />;
  if (loading) return <Spinner />;
  return (
    <div>
      <FriendProfile friend={friend} loading={loading} />
      <Button getFriend={getFriend} />
    </div>
  );
};

export default Friend;
