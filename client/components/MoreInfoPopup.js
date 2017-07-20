import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { togglePopup } from '../actions';

const modalStyle = {
  fontFamily: 'Calibri, sans-serif',
  padding: '1em',
}

const Popup = ({
  fullname, username, photo, isOpen, closePopup, dob, city
}) => {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Modal"
    >
      <div style={modalStyle}>
        <img src={photo} alt="" />
        <h1>{fullname}</h1>
        <p>Username: {username}</p>
        <p>DOB: {dob}</p>
        <p>City: {city}</p>
        <button onClick={() => closePopup(username)}>Close</button>
      </div>
    </Modal>
  )
}

const mapDispatchToProps = (dispatch) => ({
  closePopup: id => dispatch(togglePopup(id)),
})

export default connect(null, mapDispatchToProps)(Popup);