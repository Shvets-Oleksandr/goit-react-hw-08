import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Request in progress...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
