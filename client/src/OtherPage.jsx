import { Link } from "react-router-dom";

export default () => {
    return (
        <div>
            Im on some other page!
            <Link to="/">Go back home</Link>
        </div>
    )
}