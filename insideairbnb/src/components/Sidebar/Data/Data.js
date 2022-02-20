import Button from "../Components/Button/Button";
import Select from "../Components/Select/Select";
import SelectBetween from "../Components/SelectBetween/SelectBetween";
import "./Data.css";

const Data = () => {
    return (
        <div>
            <div className="bigText bold blueText">
                Amsterdam
            </div>

            <hr />

            <div className="selector">
                Neighbourhood: <div className="floatRight"><Select /></div>
            </div>
            <div className="selector">
                Review: <div className="floatRight"><SelectBetween /></div>
            </div>
            <div className="selector">
                Prijs: <div className="floatRight"><SelectBetween /></div>
            </div>

            <Button>
                Filter
            </Button>

            <hr />

            <div className="smallText">
                Bookings per month
            </div>
            <div className="mediumText bold">
                200
            </div>

            <br />

            <div className="smallText">
                Earnings per month
            </div>
            <div className="mediumText bold">
                500
            </div>

            <br />

            <div className="smallText">
                Average review value
            </div>
            <div className="mediumText bold">
                1 ster
            </div>
        </div>
    )
}

export default Data;