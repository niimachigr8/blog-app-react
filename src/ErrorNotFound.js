import { Link } from "react-router-dom";

const ErrorNotFound = () => {
    return (
        <div className="not-found">
            <h2>That page cannont be found</h2>
            <Link to="/">Back to the home page...</Link>
        </div>
    );
}
 
export default ErrorNotFound;