import { PropTypes } from 'prop-types';
import styles  from '../Contact/Contact.module.css';


export const Contact = ({contact,onDelete}) => {
  const {id,name,number} = contact;

    const handleDelete =() =>{
        onDelete(id);
    };

    return (        
        <div className={styles.link}>
            <li> {name} : {number}</li> 
            <button className={styles.button} onClick={handleDelete}>Delete</button>
        </div>                    
                   
    );
  };

  Contact.propTypes = {         
    contact:  PropTypes.shape(),
    onDelete:PropTypes.func
}