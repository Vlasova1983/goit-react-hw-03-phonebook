import {Component} from "react";
 import { PropTypes } from 'prop-types';
 import styles  from '../ContactForm/ContactForm.module.css';

 export class ContactForm  extends Component  { 
  state = {
    name:'',
    number:''
  }
   

  handleChange = event => {    
    const { name, value } = event.target;
    this.setState({ [name]: value });     
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;   
    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render(){
    const {name,number}=this.state;
    return (
      <form className={styles.contact_form} onSubmit={ this.handleFormSubmit}>
        <div className="">
          <label htmlFor="name" className="">
            <p>Name</p>
          </label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
            placeholder="Search name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </div>
        <div className="">
          <label htmlFor="number" className="">
            <p>Number</p>
          </label>
          <input
            id="number"
            type="tel"
            name="number"
            onChange={this.handleChange}
            value={number}
            placeholder="000-00-00"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </div>               

        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
      
    );
  }  
}

ContactForm.propTypes = {
  onSubmit:PropTypes.func,
}
