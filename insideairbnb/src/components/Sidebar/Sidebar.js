import "./Sidebar.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Charts from "./Charts/Charts";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Data from "./Data/Data";
import Menu from "./Menu/Menu";
import LocationInfo from "./LocationInfo/LocationInfo";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Menu />
            <div className="sidebarDisplay">
                <Routes>
                    <Route exact path="/" element={<Data />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/info" element={<LocationInfo />} />
                </Routes>
            </div>
        </div >
    )
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);