import React from 'react';

const Popup = ({ fullname, username, thumbnail}) => {
  return (
    <div>
      <img src={thumbnail} alt=""/>
      <p>{fullname}</p>
      <p>{username}</p>
    </div>
  )
}

export default Popup;