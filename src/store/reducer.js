
const initialState = {
    counter : 0,
    results: [],
}

const reducer = (state = initialState, action) => {
    // if (action.type === 'INCREMENT'){
    //     return{
    //         counter: state.counter + 1
    //     }
    // }
    // if (action.type === 'DECREMENT'){
    //     return{
    //         counter: state.counter - 1
    //     }
    // }
    // if (action.type === 'ADD'){
    //     return{
    //         counter: state.counter + action.val
    //     }
    // }
    // if (action.type === 'SUBTRACT'){
    //     return{
    //         counter: state.counter - action.val
    //     }
    // }

    switch(action.type){
        case 'INCREMENT':
            const newState = Object.assign({}, state); //clone obj /not deep clone
            newState.counter = state.counter + 1;
            return newState; //ok here but not for arr
        case 'DECREMENT':
            return{
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return{
                ...state,
                counter: state.counter + action.val
            }
        case 'SUBTRACT':
            return{
                ...state,
                counter: state.counter - action.val
            }
        case 'STORE_RESULT':
            return{
                ...state,
                results: state.results.concat( { id: new Date() ,value: state.counter }) //new arr -concat old+new /like push but doesnt touch old
                //                     date for li key ^          ^   store snapshot of counter to results arr   
            }
        case 'DELETE_RESULT':
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