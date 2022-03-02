import FilterForm from "../Components/FilterForm/FilterForm";
import "./Data.css";

const Data = () => {
    return (
        <div>
            <div className="bigText bold blueText">
                Amsterdam
            </div>

            <hr />

            <FilterForm />

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