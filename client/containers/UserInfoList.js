import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import VisibleUserList from '../components/VisibleUserList';
import { organizeUsersByLetter } from '../utils/common';

export class UserInfoList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers);
  }

  render() {
    return VisibleUserList(this.props);
  }
}

const mapStateToProps = ({ users, search }) => {
  const { list, isFetching, nameType } = users;
  
  const filteredList = list.filter(user => {
    const fullName = `${user.name.first} ${user.name.last}`;
    console.log('fullName:', fullName);
    console.log('search:', search);
    return fullName.indexOf(search) >= 0;
  })

  const usersByLetter = organizeUsersByLetter(filteredList, nameType);
  return {
    usersByLetter,
    isFetching,
  }
};

export default connect(mapStateToProps)(UserInfoList);