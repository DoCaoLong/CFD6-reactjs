import { applyMiddleware, combineReducers, createStore} from 'redux'
import AuthReducer from './reducer/AuthReducer';
import CountReducer from './reducer/CountReducer'

let reducer = combineReducers({
    CountReducer: CountReducer,
    AuthReducer: AuthReducer
})

const middleware = stores => next => action =>{
    // thunk
    if(typeof action === 'function'){
        return action(stores.dispatch)
    }else{
        next(action)
    }
}

let store = createStore(reducer,applyMiddleware(middleware));
console.log(store);
// , window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export default store