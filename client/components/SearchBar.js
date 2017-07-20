import React from 'react';
import { connect } from 'react-redux';
import { changeSearch } from '../actions';

const mapStateToProps = state => ({
  search: state.search,
})

const dispatchStateToProps = (dispatch) => ({
  onChangeSearch: (event) => {
    const search = event.target.value;
    dispatch(changeSearch(search));
  },
})

const SearchBar = ({ search, onChangeSearch }) => (
  <input type="text" name="search" placeholder="Search..."
    value={search}
    onChange={onChangeSearch}
  />
)

const ConnectedSearchBar = connect(mapStateToProps, dispatchStateToProps)(SearchBar);

export default ConnectedSearchBar;