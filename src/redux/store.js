import { combineReducers, createStore } from 'redux';
import counterReducer from './slices/counterSlice';
import timerReducer from './slices/timerSlice';
import modalReducer from './slices/modalSlice';

const reducer = combineReducers({
  counter: counterReducer,
  timer: timerReducer,
  modal: modalReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
