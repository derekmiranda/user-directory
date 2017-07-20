import React from 'react';
import UserInfoList from '../containers/UserInfoList';
import Sorter from './Sorter';

const App = () => (
  <div>
    <h1>User Directory</h1>
    <Sorter />
    <UserInfoList />
  </div>
)

export default App;