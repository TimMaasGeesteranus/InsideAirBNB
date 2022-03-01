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
        case "GET_MARKERINFO_SUCCESS":
            return{
                ...state,
                currentMarker: action.data
            }
        case "SET_CURRENT_MARKER":
            return {
                ...state,
                currentMarkerId: action.markerid
            }
        default:
            return state;
    }
}

export default reducer;