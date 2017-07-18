import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

export class App extends Component {
  static propTypes = {
    userList: PropTypes.array,
    isFetching: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers);
  }

  render() {
    const { userList } = this.props;

    let userListElem;
    if (userList) {
      const userElems = userList.map(user => <li>`${user.first} ${user.list}`</li>);
      userListElem = <ul>{userElems}</ul>;
    }

    return (
      <div>
        <h1>User Directory</h1>
        {/*userListElem*/}
      </div>
    )
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(App);