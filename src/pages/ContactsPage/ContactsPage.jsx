import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllContacts } from '../../redux/contacts/operations';
import { selectError, selectIsLoading } from '../../redux/contacts/selectors';

import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBoxcompt/SearchBox';
import ContactList from '../../components/ContactList/ContactList';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <p>Request in progress...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
