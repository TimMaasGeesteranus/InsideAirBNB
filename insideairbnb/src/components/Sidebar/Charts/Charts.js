import { useAuth } from "oidc-react/build/src/useAuth";
import { getTest } from "../../../redux/actions/api/getData";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

const Charts = (props) => {
    const auth = useAuth();

    if (!auth || !auth.userData){
        return (
            <div>
                Log in to get access to charts
            </div>
        )
    }

    return (
        <div>
            charts!
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