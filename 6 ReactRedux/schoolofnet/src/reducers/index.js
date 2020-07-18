// Learning
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import name from './name';

export default combineReducers({
    form: reduxFormReducer,
    name
});