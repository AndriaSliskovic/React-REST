import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';

import { settingsReducer } from './settingsReducer';
import loginReducer from './loginReducer';
import modalReducer from './modalReducer';
import serverReducer from './serverReducer';
import adminReducer from './adminReducer';
import errorReducer from './errorReducer';

import userReducer from './userReducer';

export default combineReducers({
    settings:settingsReducer,
    form:formReducer,
    users:userReducer,
    login:loginReducer,
    modal:modalReducer,
    serverResponse:serverReducer,
    admin:adminReducer,
    error:errorReducer

});