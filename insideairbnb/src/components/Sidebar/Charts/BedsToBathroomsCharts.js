import {
    Chart as ChartJS,
    LinearScale,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar, Scatter } from 'react-chartjs-2';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import "./Charts.css";

const BedsToBathRoomsChart = (props) => {
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        setLabels(props.neighbourhoods)
    }, [props.neighbourhoods])

    ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    const data = {
        labels,
        datasets: [
            {
                label: 'A dataset',
                data: Array.from({ length: 100 }, () => ({
                    x: Math.random(),
                    y: Math.random(),
                })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <div >
            <Scatter options={options} data={data} />
        </div>
    )
}

function mapStateToProps(state) {
    return {
        neighbourhoods: state.data.neighbourhoods
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BedsToBathRoomsChart);
