import { reducerCartPizzas } from "./reducers/reducerCartPizzas";
import { reducerIsCart } from "./reducers/reducerIsCart";
import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const reducers = combineReducers({
  cartPizza: reducerCartPizzas,
  isCart: reducerIsCart
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)