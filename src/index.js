import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Routes } from './routes/routesMapping'
import { StylesProvider } from "@material-ui/core/styles";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';

ReactDOM.render(
  <React.StrictMode>
    <StylesProvider injectFirst>
      <Provider store={store}>
        <Routes />
      </Provider>
      <ToastContainer />
    </StylesProvider>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
