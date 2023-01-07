import { PropTypes } from 'prop-types';
import { Contact } from '../Contact/Contact';
import styles  from '../ContactList/ContactList.module.css';

export const ContactList = ({contacts,onDelete}) => {
  
    return (
        <div className={styles.contact_list}>            
            {contacts.map(contact=>( 
                <Contact key={contact.id} contact={contact} onDelete={onDelete} />                
            ))}         
        </div>            
    );
  };

ContactList.propTypes = {       
    contacts: PropTypes.arrayOf( PropTypes.shape()),
    onDelete:PropTypes.func
}
    