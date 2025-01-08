import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { pokemonsReducer } from "./reducers/pokemons.js";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import App from "./App/App.jsx";
import { logger } from "./middlewares/index.js";
import "./index.css";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhancers = composeAlt(applyMiddleware(thunk, logger));

const store = createStore(pokemonsReducer, composeEnhancers);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
