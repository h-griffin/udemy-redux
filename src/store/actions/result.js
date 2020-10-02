
import * as actionTypes from './actionTypes';

// add async code (http) thunk will return function instead of the action, inside this function actions can be dispatched

//action creators



//syncronus action creator (return action) //only sync can touch store
export const saveResult = (res) => { // dry : only returns obj with payload

    // const updatedResult = res * 2; // transform here before sved
    return {
        type: actionTypes.STORE_RESULT,
        result: res,
    }
}

export const deleteResult  = (resElId) => {   
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId,
    }
}

// REDUX_THUNK -- GETSTATE
export const storeResult  = (res) => {   
    return (dispatch, getState) => { 
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log('[storeResult] old counter:',oldCounter);

            dispatch(saveResult(res));
        }, 2000);
    }
}

//asynchronus action creator (return function) // only works with thunk -

// export const storeResult  = (res) => {   
//     return dispatch => { // return function (dispatch) {
//         setTimeout(() => {
//             // fake http
//             // dispatch(storeResult); //infinite loop
//             dispatch(saveResult(res));
//         }, 2000);

//     }
// }



