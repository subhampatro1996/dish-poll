import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

const configStore = createStore(combineReducers({

}),applyMiddleware(thunk))


// https://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@github.com/subhampatro1996/dish-poll.git