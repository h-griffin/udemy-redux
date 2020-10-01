

import * as actionTypes from '../actions/actions';

const initialState = {
    counter : 0,
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
    }
    return state; //return current state
}

export default reducer;