import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { ApiReducer } from "./reducer/ApiReducer";

const reducer = combineReducers({
    Api : ApiReducer
})

const initialState = {};
const middleware = [thunk]
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware)
)