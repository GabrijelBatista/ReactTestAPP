import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/es/storage";
import TokenReducer from "./reducers/TokenReducer";
import ErrorReducer from "./reducers/ErrorReducer";
import TabsReducer from "./reducers/TabsReducer";

const rootConfig = {
  key: "root",
  storage
};
const rootReducer = combineReducers({
  TokenReducer,
  ErrorReducer,
  TabsReducer
});
const persisted = persistReducer(rootConfig, rootReducer);
const store = createStore(persisted);
const persistor = persistStore(store);
export default store;
export { persistor };
