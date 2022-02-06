const initialState = {
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_MARKERS_SUCCESS":
            return {
                ...state,
                markers: action.data
            };     
        default:
            return state;
    }
}

export default reducer;