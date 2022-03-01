import { useEffect } from "react";
import { Popup } from "react-map-gl"

const Description = (props) => {

    useEffect(() => {
        console.log(props.marker);
    }, [])

    return (
        <Popup
            anchor="top"
            longitude={Number(props.marker.geometry.coordinates[0])}
            latitude={Number(props.marker.geometry.coordinates[1])}
            closeOnClick={false}
            onClose={() => props.setPopup(null)}
        >
            <div className="alignLeft">

                <div className="blueText bold smallText">
                    {props.marker.properties.name}
                </div>
                <div className="smallText">
                    Hosted by: {props.marker.properties.hostName}
                </div>
            </div>

        </Popup>
    )
}

export default Description;