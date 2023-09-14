import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contacts",
  initialState: {
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
  },
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
    deleteContact: function (state, action) {
      // console.log('this is state from redux', state.contacts);
      // state.contacts.contactBook = state.contacts.contactBook?.filter(
      //   (contact) => contact.id !== action.payload.id
      // );

    },
  },
});

export const selectAllContacts = (state) => state.contacts.contactBook;

export const { contactAdded, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
