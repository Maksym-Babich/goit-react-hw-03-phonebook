import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ContactsList } from 'components/Contacts/Contacts.styled';
import { Contact } from 'components/Contacts/Contact/Contact';

export class Contacts extends Component {
  PropTypes = {
    onContactDelete: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  };

  render() {
    return (
      <ContactsList>
        {this.props.contacts.map((contact) => {
          const { name, number, id } = contact;
          return (
            <Contact
              key={id}
              content={` ${name}: ${number}`}
              id={id}
              onContactDelete={this.props.onContactDelete}
            ></Contact>
          );
        })}
      </ContactsList>
    );
  }
}
