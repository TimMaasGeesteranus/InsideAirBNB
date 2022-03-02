import { useEffect, useRef, useState } from "react"
import { getMarkers } from "../../redux/actions/api/getData";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { setCurrentMarker } from "../../redux/actions/action";
import "./Map.css";
import useSupercluster from "use-supercluster";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import Pin from "./Pin/Pin";
import Description from "./Description/Description";
import { useNavigate } from "react-router-dom";

const Map = (props) => {
    const [viewport, setViewport] = useState({
        longitude: 4.895168,
        latitude: 52.370216,
        width: "100%",
        height: "100%",
        zoom: 10,
    })
    const mapRef = useRef();
    const [popup, setPopup] = useState(null);
    let navigate = useNavigate();

    const [data, setData] = useState([]);
    const points = data.map(location => ({
        type: "Feature",
        properties: { cluster: false, locationId: location.id, name: location.name, hostName: location.hostName },
        geometry: {
            type: "Point",
            coordinates: [
                parseFloat(location.longitude),
                parseFloat(location.latitude),
            ]
        }
    }));

    const bounds = mapRef.current
        ? mapRef.current
            .getMap()
            .getBounds()
            .toArray()
            .flat()
        : null;

    const { clusters, supercluster } = useSupercluster({
        points,
        bounds,
        zoom: viewport.zoom,
        options: { radius: 75, maxZoom: 20 }
    });

    useEffect(() => {
        async function getMarkers() {
            await props.getMarkers();
        }
        getMarkers();
    }, [])

    useEffect(() => {
        setData(props.markers);
    }, [props.markers])

    useEffect(() => {
        setData(props.filteredMarkers);
    }, [props.filteredMarkers])

    function clickedMarker(marker) {
        console.log(marker);
        setPopup(marker);
        props.setCurrentMarker(marker.properties.locationId);
        navigate("/info");
    }

    return (
        <div className="map">
            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/mapbox/streets-v9"

                mapboxApiAccessToken='pk.eyJ1IjoidGltMzYzIiwiYSI6ImNremI3dDUwbjA3NWgyd25yenphbDlsZXoifQ.c6F-abMtJrdGEXPl-2rqXg'
                onViewportChange={newViewport => {
                    setViewport({ ...newViewport });
                }}
                ref={mapRef}
            >

                {clusters.map(cluster => {
                    const [longitude, latitude] = cluster.geometry.coordinates;
                    const {
                        cluster: isCluster,
                        point_count: pointCount
                    } = cluster.properties;

                    if (isCluster) {
                        return (
                            <Marker
                                key={`marker-${cluster.id}`}
                                longitude={longitude}
                                latitude={latitude}
                                anchor="bottom"
                            >

                                <div
                                    className="cluster-marker"
                                    style={{
                                        width: `${10 + (pointCount / points.length) * 20}px`,
                                        height: `${10 + (pointCount / points.length) * 20}px`
                                    }}
                                    onClick={() => {
                                        const expansionZoom = Math.min(
                                            supercluster.getClusterExpansionZoom(cluster.id),
                                            20
                                        );

                                        setViewport({
                                            ...viewport,
                                            latitude,
                                            longitude,
                                            zoom: expansionZoom,
                                            transitionInterpolator: new FlyToInterpolator({
                                                speed: 2
                                            }),
                                            transitionDuration: "auto"
                                        });
                                    }}
                                >
                                    {pointCount}
                                </div>
                            </Marker>
                        )
                    }

                    return (
                        <Marker
                            key={`location-${cluster.properties.locationId}`}
                            latitude={latitude}
                            longitude={longitude}
                        >
                            <div onClick={() => clickedMarker(cluster)}>
                                <Pin />
                            </div>
                        </Marker>
                    )
                })}

                {popup && (
                    <Description marker={popup} setPopup={setPopup} />
                )}

            </ReactMapGL>
        </div>
    )

}

function mapStateToProps(state) {
    return {
        markers: state.data.markers,
        filteredMarkers: state.data.filteredMarkers
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMarkers: getMarkers,
        setCurrentMarker: setCurrentMarker
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);