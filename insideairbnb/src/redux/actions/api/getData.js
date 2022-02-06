export function getPersonalData(accessToken) {
    return (dispatch) => {

        fetch(`${process.env.REACT_APP_API_ADRESS}/listing`, {
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