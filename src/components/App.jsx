import React,{Component} from "react";
import ContactForm from './ContactForm/ContacForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  }
  addContacts = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    }
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  }
  // formSubmitHandler = data => {
  //   console.log(data);
  // }
  changeFilter = (evt) => {
    this.setState({ filter: evt.currentTarget.value });
  }
  deleteContacts = (contactsId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }))
  };
  render() {
    const { contacts, filter } = this.state;
    const normaliseFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normaliseFilter),);

    return (
      <div
        style={{
          height: '100vh',
          
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={this.addContacts } /> 
        
        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} /> 
        
        <ContactList contacts={visibleContacts} onDeleteContact={ this.deleteContacts} /> 
      </div>
    );
  }
};
