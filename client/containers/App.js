import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

export class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers);
  }

  render() {
    const { userList } = this.props;

    let userListElem;
    if (userList) {
      const userElems = userList.map(
        ({ name }, idx) => <li key={idx}>{name.first} {name.last}</li>
      )
      userListElem = <ul>{userElems}</ul>;
    }

    return (
      <div>
        <h1>User Directory</h1>
        {userListElem}
      </div>
    )
  }
}

App.propTypes = {
    userList: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func,
  }

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);