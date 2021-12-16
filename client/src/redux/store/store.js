import {createStore} from 'redux'

const createStore = redux.createStore;

const globalState ={
  qty : 0,
  totalOrder: 0
}

const storeRedux = createStore(rootReducer);
