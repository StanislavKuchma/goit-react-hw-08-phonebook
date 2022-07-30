import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from '../redux/contactsApi';
import storage from 'redux-persist/lib/storage';
import { contacts } from './contactSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import authSlice from './auth/auth-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(authPersistConfig, authSlice);

let store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    contacts: contacts,
    auth: persistedReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    contactsApi.middleware,
  ],
});
setupListeners(store.dispatch);
// export RootState = store.getState;

let persistor = persistStore(store);
export { store, persistor };
