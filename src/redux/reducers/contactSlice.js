import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: '00000',
    name: 'tester',
    email: 'testing@test.com',
    contact: 6346376376
  },
  {
    id: '000001',
    name: 'tester',
    email: 'testing1@test.com',
    contact: 6846376376
  }
];

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    contactAdded: {
      reducer(state, action) {
      state.push(action.payload);
    },
    prepare(name, email, contact){
      return {
        payload: {
          id: nanoid(),
          name,
          email,
          contact
        }
      }
    }
  },
}
}
);

export const selectAllContacts = (state) => state.contacts;

export const { contactAdded } = contactSlice.actions;

export default contactSlice.reducer;