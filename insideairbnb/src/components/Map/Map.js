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
import Description from "./Description/Description";

const Map = (props) => {
    const [viewState] = useState({
        longitude: 4.895168,
        latitude: 52.370216,
        zoom: 10,
    })
    const [popup, setPopup] = useState(null);

    useEffect(() => {
        async function getMarkers() {
            props.getMarkers();
        }

        getMarkers();
    }, [])

    function clickedMarker(marker) {
        setPopup(marker)
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

                {props.markers != undefined &&
                    <div>
                        {props.markers.map(marker => (
                            <Marker
                                key={`marker-${marker.id}`}
                                longitude={marker.longitude}
                                latitude={marker.latitude}
                                anchor="bottom"
                            >
                                <div onClick={() => clickedMarker(marker)}>
                                    <Pin />
                                </div>
                            </Marker>
                        ))}
                    </div>
                }


                {popup && (
                    <Description marker={popup} setPopup={setPopup} />
                )}
            </MapGL>
        </div >
    )
}

function mapStateToProps(state) {
    return {
        markers: state.data.markers
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMarkers: getMarkers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);