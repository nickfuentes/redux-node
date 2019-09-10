const redux = require('redux')
const createStore = redux.createStore

// This is the intial state
const initialState = {
    counter: 0
}

// Create Reducer
const reducer = (state = initialState, action) => {
    console.log(action.type)
    if (action.type == "INC_COUNTER") {
        return {
            ...state, // copy the old state
            counter: state.counter + 1
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