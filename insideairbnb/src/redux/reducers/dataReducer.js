const initialState = {
    markers: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_MARKERS_SUCCESS":
            let current = state.markers
            return {
                ...state,
                markers: current.concat(action.data)
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