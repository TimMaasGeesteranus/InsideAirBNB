import "./Button.css";

const Button = (props) => {
    return (
        <div className="button">
            <div className="mediumText buttonText">
                {props.children}
            </div>
        </div>
    )
}

export default Button;