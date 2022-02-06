import {
    GET_MARKERS_SUCCESS,
} from "./actionType.js";

export function getMarkersSuccess(data) {
    data.map(marker => {
        marker.latitude = marker.latitude.toString().substr(0,2) + "." + marker.latitude.toString().substr(2);
        marker.longitude = marker.longitude.toString().substr(0,1) + "." + marker.longitude.toString().substr(1);
        return marker;
    })

    return {
        type: GET_MARKERS_SUCCESS,
        data
    }
}