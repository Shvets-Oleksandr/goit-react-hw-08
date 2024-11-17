import { createSlice } from '@reduxjs/toolkit';
import { getAllContacts, addContact, deleteContact } from './operations';
import { logoutUser } from '../auth/operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  toastAddContact: null,
  toastDeleteContact: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.toastAddContact = null;
  state.toastDeleteContact = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.toastAddContact = null;
  state.toastDeleteContact = null;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(getAllContacts.pending, handlePending)
      .addCase(getAllContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getAllContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
        state.toastAddContact = action.payload.name;
      })
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.toastDeleteContact = action.payload.name;
      })
      .addCase(deleteContact.rejected, handleRejected)

      .addCase(logoutUser.fulfilled, () => {
        return initialState;
      });
  },
});

export default contactsSlice.reducer;
