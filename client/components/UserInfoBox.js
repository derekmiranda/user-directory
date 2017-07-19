import React from 'react';
import PropTypes from 'prop-types';

const UserInfoBox = (props) => {
  const { first, last, dob, city, photo } = props;
  const fullName = `${first} ${last}`;
  return (
    <div>
      <img className="photo" src={photo} alt={fullName} />
      <h3 className="fullName">{fullName}</h3>
      <p className="dob">DOB: {dob}</p>
      <p className="city">City: {city}</p>
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