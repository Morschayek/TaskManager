import { createStore } from 'redux'; //used to create the Redux store.
import { persistStore, persistReducer } from 'redux-persist'; //The redux-persist library allows to persist the Redux store's state to storage so that the state can be maintained across page reloads or app restarts. 
import storage from 'redux-persist/lib/storage';//provides access to the storage mechanism where the state will be persisted.

import tasksReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,//local storage
};

const persistedReducer = persistReducer(persistConfig, tasksReducer);

const store = createStore(persistedReducer);

export const persistor = persistStore(store);

export default store;
