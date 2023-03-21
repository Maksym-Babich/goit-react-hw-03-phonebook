import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from 'components/Form/Form';
import { Section } from 'components/Section/Section';
import { SectionMain } from 'components/SectionMain/SectionMain';
import { Contacts } from 'components/Contacts/Contacts';
import { Search } from 'components/Search/Search';

const KEY = 'contacts-list';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidUpdate() {
    const { contacts } = this.state;

    localStorage.setItem(KEY, JSON.stringify(contacts));
  }

  componentDidMount() {
    const localStorageData = localStorage.getItem(KEY);
    if (localStorageData) {
      const contacts = JSON.parse(localStorageData);
      this.setState({ contacts });
    }
  }

  getfilteredItems = () => {
    const { contacts, filter } = this.state;
    const filteredItems = contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filter.toLowerCase()) || contact.number.includes(filter);
    });
    return filter ? filteredItems : contacts;
  };

  addContact = (event) => {
    event.preventDefault();
    const contact = {
      name: event.currentTarget.elements.name.value,
      number: event.currentTarget.elements.number.value,
      id: nanoid(),
    };

    const prevContacts = this.state.contacts.reduce((acc, contact) => {
      acc.push(contact.name, contact.number);
      return acc;
    }, []);

    if (prevContacts.includes(contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return;
    }

    if (prevContacts.includes(contact.number)) {
      alert(`Contact with number ${contact.number} already exists`);
      return;
    }

    this.setState((prevState) => {
      return {
        contacts: [contact, ...prevState.contacts],
      };
    });
    event.currentTarget.reset();
  };

  onFielterChange = (event) => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  onContactDelete = (evt) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter((contact) => {
          return contact.id !== evt.target.dataset.id;
        }),
      };
    });
  };

  render() {
    return (
      <>
        <SectionMain title="Phonebook">
          <Form onAddContact={this.addContact} />
          <Section title="Contacts">
            <Search search={this.state.filter} onSearchInput={this.onFielterChange} />
            <Contacts contacts={this.getfilteredItems()} onContactDelete={this.onContactDelete}></Contacts>
          </Section>
        </SectionMain>
      </>
    );
  }
}
