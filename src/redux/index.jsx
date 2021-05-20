import { createStore} from 'redux'

function reducer(state = {count: 0 }, action){
    if(action.type === "INCREMENT"){
        state.count++
    }
    return {...state}

}

let store = createStore(reducer);
export default store