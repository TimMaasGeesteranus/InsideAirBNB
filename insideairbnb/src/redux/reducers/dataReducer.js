const initialState = {
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "voorbeeld":
            return {
                ...state,
                value: action.data
            };     
        default:
            return state;
    }
}

export default reducer;