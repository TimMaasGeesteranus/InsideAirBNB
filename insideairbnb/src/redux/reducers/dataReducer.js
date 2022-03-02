const initialState = {
    markers: [],
    neighbourhoods: []
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
            };
        case "SET_CURRENT_MARKER":
            return {
                ...state,
                currentMarkerId: action.markerid
            };
        case "SET_NEIGHBOURHOODS":
            return {
                ...state,
                neighbourhoods: action.data
            };
        default:
            return state;
    }
}

export default reducer;