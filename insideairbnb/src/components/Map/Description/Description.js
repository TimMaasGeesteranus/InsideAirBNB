import { useEffect } from "react";
import { Popup } from "react-map-gl"

const Description = (props) => {

    return (
        <Popup
            anchor="top"
            longitude={Number(props.marker.longitude)}
            latitude={Number(props.marker.latitude)}
            closeOnClick={false}
            onClose={() => props.setPopup(null)}
        >
            <div className="alignLeft">

                <div className="blueText bold smallText">
                    {props.marker.name}
                </div>
                <div className="smallText">
                    Hosted by: {props.marker.hostName}
                </div>
            </div>

        </Popup>
    )
}

export default Description;