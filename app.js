const redux = require('redux')
const createStore = redux.createStore

// This is the intial state
const initialState = {
    counter: 0,
    isLoggedIn: false
}

// Create Reducer
const reducer = (state = initialState, action) => {
    // console.log(action.type)
    if (action.type == "INC_COUNTER") {
        return {
            ...state, // copy the old state
            counter: state.counter + 1
        }
    } else if (action.type == "ADD_COUNTER") {
        // console.log(action.value)
        return {
            ...state, // copy the old state
            counter: state.counter + action.value
        }
    }
    return state
}

// Create Store
const store = createStore(reducer)


// Dispatch Actions
store.dispatch({
    type: "INC_COUNTER"
})
console.log(store.getState())

// Incremented the state by 50
store.dispatch({ type: 'ADD_COUNTER', value: 50 })
console.log(store.getState())