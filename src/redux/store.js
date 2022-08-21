import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const configStore = createStore(combineReducers({
    
}),applyMiddleware(thunk))