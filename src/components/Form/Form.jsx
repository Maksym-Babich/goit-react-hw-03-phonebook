import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { HtmlForm, Label, Input, Button } from 'components/Form/Form.styled';

export class Form extends Component {
  PropTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  nameId = nanoid();
  phoneId = nanoid();

  render() {
    return (
      <HtmlForm onSubmit={this.props.onAddContact}>
        <Label htmlFor={this.nameId}>{'Name'}</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.nameId}
        />

        <Label htmlFor={this.phoneId}>{'Phone'}</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.phoneId}
        />

        <Button>{'Add contact'}</Button>
      </HtmlForm>
    );
  }
}
