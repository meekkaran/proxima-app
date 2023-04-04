import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import AuthReducer from "../../redux/slices/authentication/authslice";
import AnalyticsReducer from "../../redux/slices/analytics/analyticsslice";
import PredictiveAnalyticsReducer from "../../redux/slices/predictiveanalytics/predictiveanalyticsslice";
import SummarizationReducer from "../../redux/slices/summarization/summarizationslice";
import SearchReducer from "../../redux/slices/search/searchslice";
import messageReducer from "../../redux/slices/message";

//Combining the reducers
const rootReducer = combineReducers({
  auth: AuthReducer,
  messages: messageReducer,
  analytics: AnalyticsReducer,
  predictiveanalytics: PredictiveAnalyticsReducer,
  summarization: SummarizationReducer,
  searchengine: SearchReducer,
});
// persist config obj
// blacklist a store attribute using it's reducer name. Blacklisted attributes will not persist. (I did not find a way to blacklist specific values)
//Putting the storage

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  //blacklist: ['age'], //blacklisting a store attribute name, will not persist that store attribute.
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
export default store;
