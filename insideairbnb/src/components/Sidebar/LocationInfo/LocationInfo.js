import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import "./LocationInfo.css";

const LocationInfo = (props) => {

    return (
        <div className="locationInfoText">
            <div className="bigText bold blueText">
                {props.marker.name}
            </div>
            <div className="smallText">
                Hosted by: {props.marker.hostName}
            </div>

            <hr />

            <div className="bigText">
                €{props.marker.price} per night
            </div>

            <br />
            <div className="mediumText">
                Minimum amount of nights:
                <div className="floatRight bold">
                    {props.marker.minimumNights}
                </div>
            </div>
            <div className="mediumText">
                Roomtype:
                <div className="floatRight bold">
                    {props.marker.roomType}
                </div>
            </div>
            <div className="mediumText">
                Neighbourhood:
                <div className="floatRight bold">
                    {props.marker.neighbourhood}
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        marker: state.data.currentMarker
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationInfo);