import {createStore, combineReducers} from 'redux';
import UserNameReducer from './reducers/userNameReducer';

const rootReducer = combineReducers({state: UserNameReducer});

const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;
