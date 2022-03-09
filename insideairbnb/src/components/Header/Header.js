import { click } from "@testing-library/user-event/dist/click";
import { useAuth } from "oidc-react/build/src/useAuth";
import "./Header.css";

const Header = () => {
    const auth = useAuth();

    function click() {
        console.log(auth.userData)
    }

    return (
        <div>
            <div className="spaceBehindHeader" />
            <div className="header">

                <div className="headerTitle">
                    InsideAirBNB
                </div>

                {auth && auth.userData &&
                    <div onClick={() => auth.signOut()} className="headerText blue clickable">
                        Logout
                    </div>}

                {auth && auth.userData &&
                    <div onClick={() => click()} className="headerText black">
                        {auth.userData.profile.name}
                    </div>}

                {(!auth || !auth.userData) &&
                    <div onClick={() => auth.signIn()} className="headerText blue clickable">
                        Login
                    </div>}
            </div>
        </div>
    )
}

export default Header;