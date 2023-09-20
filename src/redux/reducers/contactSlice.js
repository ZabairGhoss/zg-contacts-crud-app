import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  contactBook: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactAdded: {
      reducer(state, action) {
        state.contactBook.push(action.payload);
      },
      prepare(name, email, contact) {
        return {
          payload: {
            id: nanoid(),
            name,
            email,
            contact,
          },
        };
      },
    },
    updateContact: (state, action) => {
      const { id, name, email, contact } = action.payload;
      const existingContact = state.contactBook.find(
        (contact) => contact.id === id
      );
      if (existingContact) {
        existingContact.name = name;
        existingContact.email = email;
        existingContact.contact = contact;
      }
    },
    deleteContact: (state, action) => {
      const contactIdToDelete = action.payload;
      const updatedContactBook = state.contactBook.filter(
        (contact) => contact.id !== contactIdToDelete
      );
      state.contactBook = updatedContactBook;
    },
  },
});

export const selectAllContacts = (state) => state.contacts.contactBook;

export const { contactAdded, deleteContact, updateContact } =
  contactSlice.actions;

export default contactSlice.reducer;
