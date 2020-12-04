import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <label name="search">Search</label>
      <input
        name="search"
        style={{ width: '100%' }}
        value={props.search}
        onChange={props.franckAndHugo}
      />
    </div>
  );
};

export default SearchBar;
