import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoPersonSharp } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';

import { deleteContact } from '../../redux/contacts/operations';

import DelContactModal from '../DelContactModal/DelContactModal';

import css from './Contact.module.css';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const [isDelModalOpen, setIsDelModalOpen] = useState(false);

  const onOpenDelModal = () => {
    setIsDelModalOpen(true);
  };

  const onCloseDelModal = () => {
    setIsDelModalOpen(false);
  };

  return (
    <>
      <ul className={css.dataContactList}>
        <li>
          <IoPersonSharp /> {contact.name}
        </li>
        <li>
          <IoCall /> {contact.number}
        </li>
      </ul>
      <button type="button" onClick={onOpenDelModal}>
        Delete
      </button>
      {isDelModalOpen && (
        <DelContactModal
          onCloseDelModal={onCloseDelModal}
          handleDelete={handleDelete}
          contactName={contact.name}
        />
      )}
    </>
  );
};

export default Contact;
