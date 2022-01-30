import Map from "../Map/Map";
import Sidebar from "../Sidebar/Sidebar";
import "./Container.css";


const Container = () => {
    return (
        <div className="container">
            <Map />
            <Sidebar />
        </div>
    )
}

export default Container;