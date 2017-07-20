import React from 'react';
import UserInfoList from '../containers/UserInfoList';
import Sorter from './Sorter';
import SearchBar from './SearchBar';

const App = () => (
  <div>
    <h1>User Directory</h1>
    <SearchBar />
    <Sorter />
    <UserInfoList />
  </div>
)

export default App;