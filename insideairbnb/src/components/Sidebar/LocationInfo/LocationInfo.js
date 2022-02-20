import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

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

            <div className="bigText lightblueText">
                €{props.marker.price} per night
            </div>

            <br />

            <div className="smallText">
                Minimum amount of nights

            </div>
            <div className="mediumText bold">
                {props.marker.minimumNights}
            </div>

            <br />

            <div className="smallText">
                Roomtype
            </div>
            <div className="mediumText bold">
                {props.marker.roomType}
            </div>

            <br />

            <div className="smallText">
                Neighbourhood
            </div>
            <div className="mediumText bold">
                {props.marker.neighbourhood}
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