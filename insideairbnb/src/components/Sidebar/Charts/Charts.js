import { useAuth } from "oidc-react/build/src/useAuth";
import { getTest } from "../../../redux/actions/api/getData";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import AvailabilityChart from "./AvailabilityChart";
import PriceChart from "./PriceChart";

const Charts = (props) => {
    const auth = useAuth();

    if (!auth || !auth.userData) {
        return (
            <div>
                Log in to get access to charts
            </div>
        )
    }

    return (
        <div>
            <button onClick={() => console.log(auth.userData.access_token)}>accesToken</button>
            <button onClick={() => console.log(auth.userData.id_token)}>IDtoken</button>
            <button onClick={() => console.log(auth)}>auth</button>



            <div className="mediumText bold">
                Availability
            </div>
            <AvailabilityChart token={auth.userData.access_token} />

            <br />
            <hr />
            <br />

            <div className="mediumText bold">
                Price 
            </div>
            <PriceChart token={auth.userData.access_token} />

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