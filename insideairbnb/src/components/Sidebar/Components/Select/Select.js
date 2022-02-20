import "./Select.css";

const Select = () => {
    return (
        <div >
            <select className="select" id="neighbourhoods" name="neighbourhoods">
                <option value="noord">Noord</option>
                <option value="zuid">Zuid</option>
            </select>
        </div>
    )
}

export default Select;