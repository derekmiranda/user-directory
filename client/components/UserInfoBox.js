import React from 'react';
import PropTypes from 'prop-types';
import Popup from './MoreInfoPopup';

const UserInfoBox = (props) => {
  const {
    first, last, dob, city, photo,
    username, thumbnail, clicked,
  } = props;

  const fullName = `${first} ${last}`;
  return (
    <div>
      <img className="photo" src={photo} alt={fullName} />
      <h3 className="fullName">{fullName}</h3>
      <p className="dob">DOB: {dob}</p>
      <p className="city">City: {city}</p>
      { clicked && (
        <Popup className="popup" username={username} thumbnail={thumbnail} />
      )}
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