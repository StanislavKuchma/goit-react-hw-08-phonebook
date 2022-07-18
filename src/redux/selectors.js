import { contactsApi } from './contactsApi';

export const selectContacts = state =>
  contactsApi.endpoints.getContacts.select()(state).data;
