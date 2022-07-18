// import { createSlice } from '@reduxjs/toolkit';
// import { contactsApi } from './contactsApi';
// import { useGetContactsQuery } from './contactsApi';

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },
//   reducers: {
// [contactsApi.reducerPath]: contactsApi.reducer,
// formSubmitHandler(state, { payload }) {
//   state.contacts.push(payload);
// },
// deleteContact(state, { payload }) {
//   state.contacts = state.contacts.filter(({ id }) => id !== payload);
// },
// changeFilter(state, { payload }) {
//   state.filter = payload;
// },
//   },
// });

// export const { formSubmitHandler, changeFilter, deleteContact } =
//   contactSlice.actions;
// export const contacts = contactSlice.reducer;
