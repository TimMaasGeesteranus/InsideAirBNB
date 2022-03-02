import Button from "../Button/Button";
import "./FilterForm.css";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { useEffect, useState } from "react";
import { getMarkersWithFilters } from "../../../../redux/actions/api/getData";

const FilterForm = (props) => {
    const [minReview, setMinReview] = useState(null);
    const [maxReview, setMaxReview] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [neighbourhood, setNeighbourhood] = useState("Amsterdam");
    const [error, setError] = useState();

    const isNumber = (event) => !/[0-9]/.test(event.key);

    function checkInputMin(event) {
        if (isNumber(event)) {
            event.preventDefault();
        }
    }

    function checkInputMax(event) {
        if (isNumber(event)) {
            event.preventDefault();
        }
    }

    function submit() {
        console.log("submit: ", minPrice, maxPrice, minReview, maxReview, neighbourhood)
        if (minPrice != null && maxPrice != null && (minPrice > maxPrice || minPrice === maxPrice)){
            setError("make sure the selected minimum price is not higher than the maximium price");
        }
        else if (minReview != null && maxReview != null && (minReview > maxReview || minReview === maxReview)){
            setError("make sure the selected minimum review is not higher than the maximium review");
        }
        else{
            setError();
            props.filter(neighbourhood, minReview, maxReview, minPrice, maxPrice);
        }
    }


    return (
        <div>

            <div className="selector">
                Neighbourhood: <div className="floatRight">
                    <select className="select" id="neighbourhoods" name="neighbourhoods" value={neighbourhood} onChange={e => setNeighbourhood(e.target.value)}>
                        <option value="Amsterdam">Amsterdam</option>
                        {props.neighbourhoods.map(el => (
                            <option value={el}>{el}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="selector">
                Reviews score: <div className="floatRight">
                    <input className="betweenInput" type="text" placeholder="min" onKeyPress={(e) => checkInputMin(e)} onChange={e => setMinReview(e.target.value)} />
                    <input className="betweenInput" type="text" placeholder="max" onKeyPress={(e) => checkInputMax(e)} onChange={e => setMaxReview(e.target.value)} />
                </div>
            </div>


            <div className="selector">
                Price: <div className="floatRight">
                    <input className="betweenInput" type="text" placeholder="min" onKeyPress={(e) => checkInputMin(e)} onChange={e => setMinPrice(e.target.value)} />
                    <input className="betweenInput" type="text" placeholder="max" value={maxPrice} onKeyPress={(e) => checkInputMax(e)} onChange={e => setMaxPrice(e.target.value)} />
                </div>
            </div>

            <Button onClick={submit}>
                Filter
            </Button>

            {error && <div className="errorText">error: {error}</div>}

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
        filter: getMarkersWithFilters
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterForm);