import "./Map.css";
import MapGL, {
    Marker,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    Popup,
} from "react-map-gl"
import { useEffect, useState } from "react";
import Pin from "./Pin/Pin";
import { getMarkers } from "../../redux/actions/api/getData";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';


const Map = (props) => {
    const [viewState] = useState({
        longitude: 4.895168,
        latitude: 52.370216,
        zoom: 10,
    })
    const [marker] = useState({
        longitude: 4.895168,
        latitude: 52.370216,
    })
    const [popup, setPopup] = useState(null);

    useEffect(() => {
        async function getMarkers() {
            props.getMarkers();
        }

        getMarkers();
    })

    function clickedMarker(data) {
        setPopup({ "longitude": 4.895168, "latitude": 52.370216 })
    }

    return (
        <div className="map">
            <MapGL
                initialViewState={{ ...viewState }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken='pk.eyJ1IjoidGltMzYzIiwiYSI6ImNremI3dDUwbjA3NWgyd25yenphbDlsZXoifQ.c6F-abMtJrdGEXPl-2rqXg'
            >
                <FullscreenControl position="top-left" />
                <NavigationControl position="top-left" />
                <ScaleControl />

                <Marker
                    {...marker}
                    key={`marker-${1}`}
                    anchor="bottom"
                >
                    <div onClick={() => clickedMarker()}>
                        <Pin />
                    </div>
                </Marker>

                {popup && (
                    <Popup
                        anchor="top"
                        longitude={Number(popup.longitude)}
                        latitude={Number(popup.latitude)}
                        closeOnClick={false}
                        onClose={() => setPopup(null)}
                    >
                        <div>
                            Well hello there
                        </div>
                    </Popup>
                )}
            </MapGL>
        </div >
    )
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMarkers: getMarkers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);