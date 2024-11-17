import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllContacts } from '../redux/contacts/operations';
import {
  selectError,
  selectIsLoading,
  selectToastAddContact,
  selectToastDeleteContact,
  selectContacts,
} from '../redux/contacts/selectors';

import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const toastDeleteContact = useSelector(selectToastDeleteContact);
  const toastAddContact = useSelector(selectToastAddContact);
  const isContacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch, error]);

  useEffect(() => {
    if (toastDeleteContact) {
      toast.success(`Successful delete contact - ${toastDeleteContact}!`);
    }
  }, [toastDeleteContact]);

  useEffect(() => {
    if (toastAddContact) {
      toast.success(`Successfully added contact - ${toastAddContact}!`);
    }
  }, [toastAddContact]);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm />
      {isContacts && isContacts.length >= 2 && <SearchBox />}
      {isLoading && <p>Request in progress...</p>}
      {error ? (
        <p style={{ color: '#e84a5f' }}>Error: {error}</p>
      ) : (
        <ContactList />
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ContactsPage;
