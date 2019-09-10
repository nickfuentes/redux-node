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
            ...state,
            counter: state.counter + 1
        }
    } else if (action.type == "DECRE_COUNTER") {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if (action.type == "ADD_COUNTER") {
        // console.log(action.value)
        return {
            ...state,
            counter: state.counter + action.value
        }
    } else if (action.type == "IS_LOGGED_IN") {
        return {
            ...state,
            isLoggedIn: state.isLoggedIn = true
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
console.log(store.getState(), "INC")

// // Incremented the state by 50
// store.dispatch({ type: 'ADD_COUNTER', value: 50 })
// console.log(store.getState(), "Add")

store.dispatch({
    type: "DECRE_COUNTER"
})
console.log(store.getState(), "DEC")

store.dispatch({
    type: "IS_LOGGED_IN"
})

console.log(store.getState(), "LOGGEDIN")