import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import VisibleUserList from '../components/VisibleUserList';

export class UserInfoList extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers);
  }

  render() {
    return VisibleUserList(this.props);
  }
}

UserInfoList.propTypes = {
  userList: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = ({ users }) => {
  const { list, isFetching } = users;
  return {
    userList: list,
    isFetching,
  }
};

export default connect(mapStateToProps)(UserInfoList);