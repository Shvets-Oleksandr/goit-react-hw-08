import { useSelector } from 'react-redux';

import Contact from '../contact/Contact';

import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <>
      {Array.isArray(contacts) && contacts.length === 0 && (
        <p>There are no contacts in yuor foneboock</p>
      )}
      <ul className={css.list}>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <Contact contact={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
