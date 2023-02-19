import React,{Component} from "react";
import ContactForm from './ContactForm/ContacForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

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
  addContacts = () => {
    
  }
  formSubmitHandler = data => {
    console.log(data);
  }
  
  deleteContacts = (contactsId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsId),
    }))
  }
  render() {
    const { contacts } = this.state;
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
        <ContactForm onSubmitForm={this.formSubmitHandler } /> 
        
        <h2>Contacts</h2>
        {/* <Filter/>*/}
        <ContactList contacts={contacts} onDeleteContact={ this.deleteContacts} /> 
      </div>
    );
  }
};
