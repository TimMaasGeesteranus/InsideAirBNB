const initialState = {
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_MARKERS_SUCCESS":
            return {
                ...state,
                markers: action.data
            };
        case "SET_CURRENT_MARKER":
            return {
                ...state,
                currentMarker: action.marker
            }
        default:
            return state;
    }
}

export default reducer;