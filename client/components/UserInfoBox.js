import React from 'react';
import PropTypes from 'prop-types';

const UserInfoBox = ({ first, last, dob, city, photo }) => {
  const fullName = `${first} ${last}`;
  return (
    <div>
      <img src={photo} alt={fullName} />
      <h3>{fullName}</h3>
      <p>DOB: {dob}</p>
      <p>City: {city}</p>
    </div>
  )
}

UserInfoBox.propTypes = {
  first: PropTypes.string,
  last: PropTypes.string,
  dob: PropTypes.string,
  city: PropTypes.string,
  photo: PropTypes.string,
}

export default UserInfoBox;