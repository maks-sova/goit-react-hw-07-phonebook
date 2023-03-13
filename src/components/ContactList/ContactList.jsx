import ContactListItem from '../ContactListItem/ContactListItem.jsx';
import css from './ContactList.module.css';

import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const filterContacts = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return filteredContacts;
  };

  const filteredContacts = filterContacts();

  return filteredContacts.length > 0 ? (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  ) : (
    <p className={css.warning}>There are not such contacts in this phonebook</p>
  );
};

export default ContactList;
