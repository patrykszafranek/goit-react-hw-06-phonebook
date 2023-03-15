import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: JSON.parse(localStorage.getItem('contacts-list')) || [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const newContact = action.payload;
      const newContacts = [...state.contacts, newContact];
      localStorage.setItem('contacts-list', JSON.stringify(newContacts));
      return {
        ...state,
        contacts: newContacts,
      };
    },
    deleteContact(state, action) {
      const id = action.payload;
      state.contacts = state.contacts.filter(contact => contact.id !== id);
      localStorage.setItem('contacts-list', JSON.stringify(state.contacts));
    },
    filterContact(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, filterContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
