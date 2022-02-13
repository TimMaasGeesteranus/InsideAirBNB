import { useAuth } from "oidc-react/build/src/useAuth";
import "./Sidebar.css";

const Sidebar = () => {
    const auth = useAuth();


    return (
        <div className="sidebar">
            <p>Amsterdam</p>
            <button onClick={() => console.log(auth.userData)}>auth.userdata</button>

            {auth && auth.userData && <p>ingelogd</p>}
            {(!auth || !auth.userData) && <p>uitgelogd</p>}





        </div>
    )
}

export default Sidebar;