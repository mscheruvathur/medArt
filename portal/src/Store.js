import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { hospitalRegisterReducer } from './reducers/hospitalRegisterReducers'

const reducer = combineReducers({
    hospitalRegister: hospitalRegisterReducer,
})

const initialState = {}
const middleware = [thunk]
const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store;
