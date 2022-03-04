import { GetStatsNASuccess, GetStatsNPSuccess } from "../action";

export function getPricePerNeighbourhood() {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ADRESS}/priceperneighbourhood`, {
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error();
                }
                return response.json()
            })
            .then(data => {
                console.log("stats:")
                console.log(data);
                dispatch(GetStatsNPSuccess(data));
            })
            .catch(e => {
                console.log("oeps");
            })
    }
}

export function getAvailabilityPerNeighbourhood() {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ADRESS}/availabilityperneighbourhood`, {
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error();
                }
                return response.json()
            })
            .then(data => {
                console.log("available:")
                console.log(data);
                dispatch(GetStatsNASuccess(data));
            })
            .catch(e => {
                console.log("oeps");
            })
    }
}