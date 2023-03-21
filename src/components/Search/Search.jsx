import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SearchField } from 'components/Search/Search.styled';

export class Search extends Component {
  PropTypes = {
    search: PropTypes.string.isRequired,
    onSearchInput: PropTypes.func.isRequired,
  };

  render() {
    return (
      <SearchField type="text" placeholder="Search" value={this.props.search} onChange={this.props.onSearchInput} />
    );
  }
}
