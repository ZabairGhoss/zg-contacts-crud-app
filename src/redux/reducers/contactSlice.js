import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  contactBook: [
    {
      id: "00000",
      name: "tester",
      email: "testing@test.com",
      contact: 6346376376,
    },
    {
      id: "000001",
      name: "tester",
      email: "testing1@test.com",
      contact: 6846376376,
    },
  ],
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

export const { contactAdded, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
