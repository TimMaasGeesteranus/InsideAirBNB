import { getMarkerInfoSuccess, getMarkersSuccess, SetNeighbourhoods } from "../action";

export function getMarkers(accessToken) {
    return (dispatch) => {

        fetch(`${process.env.REACT_APP_API_ADRESS}/neighbourhood`, {
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error();
                }
                return response.json()
            })
            .then((data) => {
                dispatch(SetNeighbourhoods(data));
                data.forEach(neighbourhood => {

                    fetch(`${process.env.REACT_APP_API_ADRESS}/minimal/${neighbourhood}`, {
                    })
                        .then(response => {
                            if (response.status !== 200) {
                                throw new Error();
                            }
                            return response.json()
                        })
                        .then(data => {
                            dispatch(getMarkersSuccess(data));
                        })

                });
            })
            .catch(e => {
                console.log("oeps");
            })
    }
}

export function getMarkersWithFilters(neighbourhood, minreview, maxreview, minprice, maxprice) {
    minreview = minreview || 0;
    maxreview = maxreview || 10000;
    minprice = minprice || 0;
    maxprice = maxprice || 10000;

    let filters = {neighbourhood: neighbourhood, minPrice: minprice, maxPrice: maxprice, minReview: minreview, maxReview: maxreview}

    console.log(filters);

    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ADRESS}/filtered`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(filters)
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error();
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
    }
}

export function getTest(accessToken) {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ADRESS}/test`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        })
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error();
                }
                return response.json()
            })
            .then((data) => {
                console.log(data);
            })
            .catch(e => {
                console.log("oeps");
            })
    }
}

export function getListingInfo(id) {
    return (dispatch) => {
        fetch(`${process.env.REACT_APP_API_ADRESS}/listing/${id}`, {
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error();
                }
                return response.json()
            })
            .then(data => {
                dispatch(getMarkerInfoSuccess(data));
            })
            .catch(e => {
                console.log("oeps");
            })
    }
}