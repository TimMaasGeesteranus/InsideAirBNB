import { useAuth } from "oidc-react/build/src/useAuth";
import { getTest } from "../../../redux/actions/api/getData";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import AvailabilityChart from "./AvailabilityChart";
import PriceChart from "./PriceChart";
import BedsToBedroomsChart from "./BedsToBedroomsChart";
import BedsToBathroomsCharts from "./BedsToBathroomsCharts";

const Charts = (props) => {
    const auth = useAuth();

    // AUTHORIZATION OFF
    // if (!auth || !auth.userData) {
    //     return (
    //         <div>
    //             Log in to get access to charts
    //         </div>
    //     )
    // }

    return (
        <div>

            <div className="mediumText bold">
                Neighbourhood data
            </div>
            <br />
            <AvailabilityChart />
            <br />
            <PriceChart />

            <hr />

            <div className="mediumText bold">
                Listing data
            </div>
            <br />
            <BedsToBedroomsChart />
            <br />
            <BedsToBathroomsCharts />
            <br />
            <br />
            <br />
        </div>
    )
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTest: getTest
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts);