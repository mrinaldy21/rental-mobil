import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducer from './redux/reducer/reducer';



const storeRedux = createStore(reducer)

ReactDOM.render(
  <Provider store={storeRedux}>
      <App />
  </Provider>,
  document.getElementById('root')
);
