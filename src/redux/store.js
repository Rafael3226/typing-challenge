import counterReducer from './slices/counterSlice';
import { combineReducers, createStore } from 'redux';

const reducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
