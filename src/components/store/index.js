import {combineReducers, createStore, applyMiddleware} from "redux";
import {initData} from "../initialData/init";
import {selectedSection, signs, i18n, question} from "../reducers/reducers";
const stateData = {...initData};
const logger = store => next => action => {
    let result;
    console.groupCollapsed('dispatching', action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
};

const saver = store => next => action => {
    console.log('saver');
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result
};

const storeFactory = (initialState= stateData) =>
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({selectedSection, signs, i18n, question}),
        stateData
    );

export default storeFactory;