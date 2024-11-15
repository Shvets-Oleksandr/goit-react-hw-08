import { createSelector } from '@reduxjs/toolkit';

import { selectValueFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectValueFilter],
  (contacts, valueFilter) => {
    const filter = valueFilter.toLowerCase();
    if (!filter) return contacts;
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(filter) ||
        contact.number.toLowerCase().includes(filter)
    );
  }
);

export const selectToastDeleteContact = state =>
  state.contacts.toastDeleteContact;
export const selectToastAddContact = state => state.contacts.toastAddContact;
export const selectIsLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
