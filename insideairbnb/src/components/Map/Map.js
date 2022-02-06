import "./Map.css";
import MapGL, {
    Marker,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
} from "react-map-gl"
import { useState } from "react";

const Map = () => {
    const [viewState] = useState({
        longitude: 4.895168,
        latitude: 52.370216,
        zoom: 10,
    })
    const [marker] = useState({
        longitude: 4.895168,
        latitude: 52.370216,
    })

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
                </Marker>
            </MapGL>
        </div>
    )
}

export default Map;