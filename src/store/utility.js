// count go in reducers , but is not a reducer

// copy old state
export const updateObject = (oldObject, updatedValues) => {
    return {
        // ...state,
        // counter: state.counter - action.val

        ...oldObject,
        ...updatedValues,
    }
}