import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className={styles.contactList}>
        {contacts.map(({id, name, number}) => (
      <li key={id} className = {styles.contactList_item}>
        {name + ":" + number}
        {
          <button
            className={styles.contactList_btn}
            type="button"
            name="delte"
            onClick={() => onDeleteContact(id)}
          >
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

// ContactList.propTypes = {
//   onRemoveContact: PropTypes.func.isRequired,
//   contacts: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//   })),
// }
export default ContactList;