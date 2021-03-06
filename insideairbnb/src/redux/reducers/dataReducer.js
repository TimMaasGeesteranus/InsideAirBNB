const initialState = {
    markers: [],
    neighbourhoods: [],
    filteredMarkers: []
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
            return {
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
        case "SET_FILTERED_MARKERS":
            return {
                ...state,
                filteredMarkers: action.data
            };
        case "GET_STATS_NP_SUCCESS":
            return {
                ...state,
                statsNP: action.data
            };
        case "GET_STATS_NA_SUCCESS":
            return {
                ...state,
                statsNA: action.data
            }
        default:
            return state;
    }
}

export default reducer;