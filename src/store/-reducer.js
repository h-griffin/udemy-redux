

import * as actionTypes from './actions';

const initialState = {
    counter : 0,
    results: [],
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.INCREMENT:
            return{
                ...state,
                counter: state.counter + 1
            }
            // const newState = Object.assign({}, state); //clone obj /not deep clone
            // newState.counter = state.counter + 1;
            // return newState; //ok here but not for arr
        case actionTypes.DECREMENT:
            return{
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return{
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return{
                ...state,
                counter: state.counter - action.val
            }
        case actionTypes.STORE_RESULT:
            return{
                ...state,
                results: state.results.concat( { id: new Date() ,value: state.counter }) //new arr -concat old+new /like push but doesnt touch old
                //                     date for li key ^          ^   store snapshot of counter to results arr   
            }
        case actionTypes.DELETE_RESULT:
            // const id =2
            // // state.results.splice(id, 2) //mutates directly
            // const newArray = [...state.results] // arr obj just pointers ok to remove from arr
            // newArray.splice(id, 1)

            const updatedArray = state.results.filter( result => result.id !== action.resultElId); // new array- func on each el

            return{
                ...state,
                results: updatedArray,
            }
    }
    return state; //return current state
}

export default reducer;