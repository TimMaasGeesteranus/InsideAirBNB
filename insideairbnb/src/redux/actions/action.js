import {
    GET_MARKERINFO_SUCCESS,
    GET_MARKERS_SUCCESS,
    GET_STATS_NA_SUCCESS,
    GET_STATS_NP_SUCCESS,
    SET_CURRENT_MARKER,
    SET_FILTERED_MARKERS,
    SET_NEIGHBOURHOODS,
} from "./actionType.js";

export function getMarkersSuccess(data) {
    data.map(marker => {
        marker.latitude = marker.latitude.toString().substr(0, 2) + "." + marker.latitude.toString().substr(2);
        marker.longitude = marker.longitude.toString().substr(0, 1) + "." + marker.longitude.toString().substr(1);
        return marker;
    })

    return {
        type: GET_MARKERS_SUCCESS,
        data
    }
}

export function getMarkerInfoSuccess(data) {
    return {
        type: GET_MARKERINFO_SUCCESS,
        data
    }
}

export function setCurrentMarker(markerid) {
    return {
        type: SET_CURRENT_MARKER,
        markerid
    }
}

export function SetNeighbourhoods(data) {
    return {
        type: SET_NEIGHBOURHOODS,
        data
    }
}

export function SetFilteredMarkers(data){
    data.map(marker => {
        marker.latitude = marker.latitude.toString().substr(0, 2) + "." + marker.latitude.toString().substr(2);
        marker.longitude = marker.longitude.toString().substr(0, 1) + "." + marker.longitude.toString().substr(1);
        return marker;
    })
    
    return {
        type: SET_FILTERED_MARKERS,
        data
    }
}

export function GetStatsNPSuccess(data){
    return {
        type: GET_STATS_NP_SUCCESS,
        data
    }
}

export function GetStatsNASuccess(data){
    return {
        type: GET_STATS_NA_SUCCESS,
        data
    }
}