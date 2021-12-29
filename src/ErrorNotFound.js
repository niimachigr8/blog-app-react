import { Link } from "react-router-dom";

const ErrorNotFound = () => {
    return (
        <div className="not-found">
            <h2>This page can't be found</h2>
            <Link to="/">Back to the home page...</Link>
        </div>
    );
}
 
export default ErrorNotFound;