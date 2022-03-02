import "./Button.css";

const Button = (props) => {
    return (
        <div className="button" onClick={props.onClick}>
            <div className="mediumText buttonText">
                {props.children}
            </div>
        </div>
    )
}

export default Button;