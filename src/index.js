import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './/Components/Todo.css'
import reportWebVitals from './reportWebVitals';
import Todo from './Components/Todo';
import { Provider } from 'react-redux'
import { configureStore } from "@reduxjs/toolkit";
import {fromDataSlice , cardDetailsSlice} from "../src/redux/reducer"


const store = configureStore({
  reducer: {
    TODO: fromDataSlice.reducer,
    CARD : cardDetailsSlice.reducer
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Todo/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
