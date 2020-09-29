//NODE JS - console

const redux = require('redux'); // node import syntax

const createStore = redux.createStore;

const initialState = { //most often obj, can be a num
    counter: 0
}

// reducer -only thing that can update state
const rootReducer = (state = initialState, action) => { //takes initalState as default if stae is undef
    //must return 1 thing - updated state

    if(action.type === 'INC_COUNTER'){
        return{
            ...state,   // never mutate state diractly alwasy copy
            counter: state.counter + 1
        };
    }
    if(action.type === 'ADD_COUNTER'){
        return{
            ...state,   // never mutate state diractly alwasy copy
            counter: state.counter + action.value
        };
    }

    return state;
};

// store 
const store = createStore(rootReducer);
console.log('empty store created',store.getState()); // currently holds empty state without init

// subscription
store.subscribe(() =>{ 
    //func executed when state is updated
    // after store creation to listen for any dispatches/changes
    console.log('[subscription]', store.getState());
}) 

// dispatching action
store.dispatch( { type: 'INC_COUNTER' }); //type of action to give to reducer
store.dispatch( { type: 'ADD_COUNTER', value: 10 }); // add by 10

console.log(store.getState()); // now with logic is 11 // still zero, not 11(no reducer logic)


