import React from 'react';
import PropTypes from 'prop-types';
import Popup from './MoreInfoPopup';

const UserInfoBox = (props) => {
  const {
    first, last, dob, city, photo,
    username, thumbnail, clicked,
    onPicClick,
  } = props;

  const fullname = `${first} ${last}`;
  return (
    <div>
      <img className="photo" src={photo} alt={fullname} onClick={() => onPicClick(username)} />
      <h3 className="fullname">{fullname}</h3>
      <p className="dob">DOB: {dob}</p>
      <p className="city">City: {city}</p>
      { clicked && (
        <Popup
          className="popup"
          fullname={fullname}
          username={username}
          thumbnail={thumbnail}
        />
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