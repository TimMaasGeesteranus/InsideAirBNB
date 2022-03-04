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
import { getAvailabilityPerNeighbourhood } from '../../../redux/actions/api/getStatistics';
import "./Charts.css";

const AvailabilityChart = (props) => {
    const [dataSet, setDataSet] = useState([]);
    const [data, setData] = useState();

    useEffect(() => {
        async function get() {
            await props.getData();
        }

        get();
    }, [])

    useEffect(() => {
        setDataSet(props.data);
        if (props.data) {
            setData(
                {
                    labels: Object.keys(props.data),
                    datasets: [
                        {
                            label: 'Days',
                            data: Object.values(props.data),
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        }
                    ],
                }
            )
        }
    }, [props.data])

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

    return (
        <div className='availabilityChart'>
            {data &&
                <Bar options={options} data={data} />
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        data: state.data.statsNA
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getData: getAvailabilityPerNeighbourhood
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AvailabilityChart);