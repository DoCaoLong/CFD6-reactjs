import { combineReducers, createStore} from 'redux'
import AuthReducer from './reducer/AuthReducer';
import CountReducer from './reducer/CountReducer'

let reducer = combineReducers({
    CountReducer: CountReducer,
    AuthReducer: AuthReducer
})
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store