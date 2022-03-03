import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import "./Charts.css";

const AvailabilityChart = (props) => {
    const [labels, setLabels] = useState([]);

    useEffect(() => {
        setLabels(props.neighbourhoods)
    }, [props.neighbourhoods])

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
                innerHeight: 20
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Average availability per month per neighbourhood',
            },
        },
    }

    const data = {
        labels,
        datasets: [
            {
                label: 'Days',
                data: labels.map(() => Math.random()),
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
        ],
    }

    return (
        <div className='availabilityChart'> 
            <Bar options={options} data={data}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(AvailabilityChart);