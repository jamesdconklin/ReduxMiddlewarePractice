import {applyMiddleware} from 'redux';
import todoMiddleware from './todo_middleware';

export default applyMiddleware(todoMiddleware);
