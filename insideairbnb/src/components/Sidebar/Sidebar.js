import "./Sidebar.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import Charts from "./Charts/Charts";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Data from "./Data/Data";
import Menu from "./Menu/Menu";

const Sidebar = () => {

    return (
        <div className="sidebar">
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route exact path="/" element={<Data />} />
                    <Route path="/charts" element={<Charts />} />
                </Routes>
            </BrowserRouter>
        </div>
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