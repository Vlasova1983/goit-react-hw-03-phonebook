import {Component} from "react";
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import styles  from './App.module.css';


export class App  extends Component {
  state = {
    contacts: [],
    filter: '',        
  };

  componentDidMount() {    
    const contacts = JSON.parse(localStorage.getItem('contacts')) || this.state.contacts;
    this.setState({ contacts });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length !== 0 && prevState.contacts.length !== this.state.contacts.length){    
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }    
  }

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
