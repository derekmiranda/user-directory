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

const organizeUsersByLetter = (userList, nameType) => {
  // expect to see letter sections based on capitalized first letter of last names
  const getNameOfUser = (user, nameType) => user.name[nameType];
  const usersByLetter = userList
    .reduce((userObj, user) => {
      const name = getNameOfUser(user, nameType);
      const firstLetter = name[0];

      if (userObj[firstLetter] === undefined) {
        userObj[firstLetter] = [user];
      } else {
        userObj[firstLetter].push(user);
      }

      return userObj;
    }, {})
  console.log(usersByLetter);
  return usersByLetter;
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