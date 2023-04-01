import { cartPizzas } from "./reducers/cartPizzas";
import { createStore } from "redux";

export const store = createStore(cartPizzas)