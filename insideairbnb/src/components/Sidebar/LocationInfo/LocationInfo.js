import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getListingInfo } from "../../../redux/actions/api/getData";

const LocationInfo = (props) => {
    const [marker, setMarker] = useState();

    useEffect(() => {
        async function get() {
            await props.getInfo(props.markerId);
            setMarker(props.marker);
        }

        if (!marker || (props.markerId !== marker.id)) {
            get();
        }
    })

    return (
        <div className="locationInfoText">
            {marker && <div>
                <div className="bigText bold blueText">
                    {marker.name}
                </div>
                <div className="smallText">
                    Hosted by: {marker.hostName}
                </div>

                <hr />

                <div className="bigText lightblueText">
                    €{marker.price} per night
                </div>

                <br />

                <div className="smallText">
                    Minimum amount of nights

                </div>
                <div className="mediumText bold">
                    {marker.minimumNights}
                </div>

                <br />

                <div className="smallText">
                    Roomtype
                </div>
                <div className="mediumText bold">
                    {marker.roomType}
                </div>

                <br />

                <div className="smallText">
                    Neighbourhood
                </div>
                <div className="mediumText bold">
                    {marker.neighbourhood}
                </div>

                <hr />

                <div className="smallText">
                    Bookings per month
                </div>
                <div className="mediumText bold">
                    {marker.bookingsPerMonth}
                </div>

                <br />

                <div className="smallText">
                    Earnings per month
                </div>
                <div className="mediumText bold">
                    {marker.earningsPerMonth}
                </div>
            </div>}

        </div>
    )
}

function mapStateToProps(state) {
    return {
        markerId: state.data.currentMarkerId,
        marker: state.data.currentMarker

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getInfo: getListingInfo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationInfo);