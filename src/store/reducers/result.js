

import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../utility';

const initialState = {
    results: [],
}

const reducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.STORE_RESULT:

            return updateObject(state, {results: state.results.concat( { id: new Date() ,value: action.result })} );
                //new arr -concat old+new /like push but doesnt touch old
                //                     date for li key ^          ^   store snapshot of counter to results arr   

        case actionTypes.DELETE_RESULT:
            // const id =2
            // // state.results.splice(id, 2) //mutates directly
            // const newArray = [...state.results] // arr obj just pointers ok to remove from arr
            // newArray.splice(id, 1)

            const updatedArray = state.results.filter( result => result.id !== action.resultElId); // new array- func on each el

            return updateObject(state, {results: updatedArray});
    }
    return state; //return current state
}

export default reducer;