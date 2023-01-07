import {Component} from "react";
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import styles  from './App.module.css';


export class App  extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',        
  };

  isContactInState = ({ name }) =>
    !!this.state.contacts.filter(({name: prevName}) => {
      return prevName === name 
  }).length;

  handleSubmit = ({ name, number }) => { 
    if (this.isContactInState({ name })) {
      alert('Contact is in phonebook');
      return;    
    }

    this.setState(({ contacts: prevState }) => ({
      contacts: [...prevState, { id:this.getRandomID(), name, number }],
    }));   
  };

  handleFilterContacts =(value)=>{ 
    this.setState({filter:value});       
  };

  getFilterContact() {
    return this.state.contacts.filter((contact)=>contact.name.toLowerCase().includes(this.state.filter));
  }


  handleDeleteContact =(id)=>{   
   this.setState(prevState=>{   
    return{contacts:prevState.contacts.filter((contact)=>contact.id !== id)};
    });   
  };

  getRandomID() {
    return `${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  
  render(){ 
    const   {filter} = this.state;
      
    return (
      <div className={styles.conteiner}>
        <h1>Phonebook</h1>
        <ContactForm   onSubmit={this.handleSubmit}/>

        <h2>Contacts</h2>
        <Filter filter={filter} onFilter={this.handleFilterContacts}/>
        <ContactList contacts={this.getFilterContact()} onDelete={this.handleDeleteContact}/>               
      </div>
    );
  }   
};
