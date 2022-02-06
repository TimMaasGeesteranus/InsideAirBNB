import {
    GET_MARKERS_SUCCESS,
} from "./actionType.js";

export function getMarkersSuccess(data) {
    return {
        type: GET_MARKERS_SUCCESS,
        data
    }
}