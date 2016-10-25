import rootReducer from "../reducers/root_reducer";
import {createStore} from 'redux';
import masterMiddleware from '../middleware/master_middleware';

const configureStore = () => (
  createStore(rootReducer, masterMiddleware)
);

export default configureStore;
