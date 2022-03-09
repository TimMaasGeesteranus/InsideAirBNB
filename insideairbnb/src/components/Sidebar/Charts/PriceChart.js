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
import { getPricePerNeighbourhood } from '../../../redux/actions/api/getStatistics';
import "./Charts.css";

const PriceChart = (props) => {
    const [dataSet, setDataSet] = useState();
    const [data, setData] = useState();

    useEffect(() => {
        async function get() {
            await props.getData(props.token);
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
                            label: 'Price',
                            data: Object.values(props.data),
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
                text: 'Average price per night per neighbourhood',
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
        data: state.data.statsNP
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getData: getPricePerNeighbourhood
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PriceChart);