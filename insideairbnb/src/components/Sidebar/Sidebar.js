import { useAuth } from "oidc-react/build/src/useAuth";
import "./Sidebar.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { getTest } from "../../redux/actions/api/getData";

const Sidebar = (props) => {
    const auth = useAuth();

    return (
        <div className="sidebar">
            <p>Amsterdam</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);