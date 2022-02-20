import "./SelectBetween.css";

const SelectBetween = () => {
    function checkInput(event) {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }

    return (
        <div>
            <input className="betweenInput" type="text" placeholder="min" onKeyPress={(e) => checkInput(e)} />
            <input className="betweenInput" type="text" placeholder="max" onKeyPress={(e) => checkInput(e)} />
        </div>
    )
}

export default SelectBetween;