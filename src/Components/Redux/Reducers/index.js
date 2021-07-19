import  {combineReducers}from 'redux';
import BookReducer from './BookReducer';
import CountReducer from './CountReducer';
const reducers = combineReducers({
    books : BookReducer,
    count : CountReducer
})
export default reducers;