
//const same name as identifier

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';

export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// add async code (http) thunk will return function instead of the action, inside this function actions can be dispatched

//action creators

export const increment  = () => {   //same as identifier in camel case
    return { //action
        type: INCREMENT
    }
}

export const decrement  = () => {   
    return {
        type: DECREMENT
    }
}

export const add  = (value) => {   
    return {
        type: ADD,
        val: value,
    }
}

export const subtract  = (value) => {   
    return {
        type: SUBTRACT,
        val: value,
    }
}

//syncronus action creator (return action) //only sync can touch store
export const saveResult = (res) => { 
    return {
        type: STORE_RESULT,
        result: res,
    }
}

//asynchronus action creator (return function) // only works with thunk -
export const storeResult  = (res) => {   
    return dispatch => { // return function (dispatch) {
        setTimeout(() => {
            // fake http
            // dispatch(storeResult); //infinite loop
            dispatch(saveResult(res));
        }, 2000);

    }
}

export const deleteResult  = (resElId) => {   
    return {
        type: DELETE_RESULT,
        resultElId: resElId,
    }
}
