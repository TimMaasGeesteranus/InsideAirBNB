import { useAuth } from "oidc-react/build/src/useAuth";
import "./Header.css";

const Header = () => {
    const auth = useAuth();

    return (
        <div>
            <div className="spaceBehindHeader" />
            <div className="header">

                <div className="headerTitle">
                    InsideAirBNB
                </div>

                {auth && auth.userData &&
                    <div onClick={() => auth.signOut()} className="headerText">
                        Logout
                    </div>}
                {(!auth || !auth.userData) &&
                    <div onClick={() => auth.signIn()} className="headerText">
                        Login
                    </div>}
            </div>
        </div>
    )
}

export default Header;