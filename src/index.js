import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import { store } from "./app/store"
import App from "./page/App";
import { fetchUser } from './app/userSlice';

store.dispatch(fetchUser())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);
