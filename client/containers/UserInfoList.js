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

const mapStateToProps = ({ users }) => {
  const { list, isFetching } = users;
  const usersByLetter = organizeUsersByLetter(list, 'last');
  return {
    usersByLetter,
    isFetching,
  }
};

export default connect(mapStateToProps)(UserInfoList);