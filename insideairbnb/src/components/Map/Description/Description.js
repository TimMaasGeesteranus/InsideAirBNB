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
            <div>
                {props.marker.name}
            </div>
        </Popup>
    )
}

export default Description;