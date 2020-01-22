import React from "react";

const FriendProfile = ({ friend }) => {
  const { name, picture, location, email, phone } = friend;

  return (
    <div>
      <img className='img-thumbnail' src={picture.large} alt={name.first} />
      <ul className='list-group'>
        <li className='list-group-item'>
          <strong>Full Name: </strong>
          {name.first}, {name.last}
        </li>
        <li className='list-group-item'>
          <strong>Location: </strong>
          {location.country}, / {location.city}
        </li>
        <li className='list-group-item'>
          <strong>Email: </strong>
          {email}
        </li>
        <li className='list-group-item'>
          <strong>Phone Number: </strong>
          {phone}
        </li>
      </ul>
    </div>
  );
};

export default FriendProfile;
