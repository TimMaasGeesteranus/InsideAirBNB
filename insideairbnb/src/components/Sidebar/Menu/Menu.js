import { useLocation, useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = () => {
    let navigate = useNavigate();
    let path = useLocation();

    return (
        <div className="menuContainer">
            <div onClick={() => navigate("/")} className={path.pathname === "/" ? "menuItemClicked" : "menuItem"}>
                Data
            </div>
            <div onClick={() => navigate("/charts")} className={path.pathname === "/charts" ? "menuItemClicked" : "menuItem"}>
                Charts
            </div>
        </div>
    )
}

export default Menu;