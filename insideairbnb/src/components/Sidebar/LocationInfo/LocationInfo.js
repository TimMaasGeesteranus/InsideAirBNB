import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

const LocationInfo = (props) => {

    return (
        <div>
            info
            {props.marker.name}
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