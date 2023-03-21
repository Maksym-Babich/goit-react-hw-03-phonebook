import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactItem, Delete } from 'components/Contacts/Contact/Contact.styled';

export class Contact extends Component {
  PropTypes = {
    content: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onContactDelete: PropTypes.func.isRequired,
  };

  render() {
    return (
      <ContactItem>
        {this.props.content}{' '}
        <Delete data-id={this.props.id} onClick={this.props.onContactDelete}>
          Delete
        </Delete>
      </ContactItem>
    );
  }
}
