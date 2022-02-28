import { getMarkersSuccess } from "../action";

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