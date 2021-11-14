import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './components/redux/store';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor= {persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
