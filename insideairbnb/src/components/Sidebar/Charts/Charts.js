import { useAuth } from "oidc-react/build/src/useAuth";
import { getTest } from "../../../redux/actions/api/getData";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

const Charts = (props) => {
    const auth = useAuth();

    return (
        <div>
            <button onClick={() => props.getTest(auth.userData.access_token)}>get testdata</button>
            <button onClick={() => console.log(auth.userData.access_token)}>get auth.user</button>


            {auth && auth.userData && <p>ingelogd!</p>}
            {(!auth || !auth.userData) && <p>uitgelogd</p>}
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