import {createStore, applyMiddleware, combineReducers} from 'redux';

import {choresReducer, newChoreReducer} from './reducers/chores';

import {createEpicMiddleware} from 'redux-observable';
import {rootEpic} from "./epics/index";

const reducer = combineReducers({
    chores: choresReducer,
    newChore: newChoreReducer
});

console.log(newChoreReducer);

const epicMiddleware = createEpicMiddleware(rootEpic);

export default createStore(
    reducer,
    applyMiddleware(epicMiddleware)
);