import React from 'react';
import { connect } from 'react-redux';
import { changeSort } from '../actions';

const mapStateToProps = state => ({
  nameType: state.users.nameType,
})

const dispatchStateToProps = (dispatch) => ({
  onChangeSort: (event) => {
    const nameType = event.target.value;
    dispatch(changeSort(nameType));
  },
})

const Sorter = ({ nameType, onChangeSort }) => (
  <div id="sorter">
    <p>Sort By</p>
    <p><input type="radio" name="nameType" value="last"
      checked={nameType === 'last'}
      onChange={onChangeSort}
    />Last Name</p>
    <p><input type="radio" name="nameType" value="first"
      checked={nameType === 'first'}
      onChange={onChangeSort}
    />First Name</p>
  </div>
)

const ConnectedSorter = connect(mapStateToProps, dispatchStateToProps)(Sorter);

export default ConnectedSorter;