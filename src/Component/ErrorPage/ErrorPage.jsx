import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops:{error.statusText || error.message}</h1>
            {
                error.status ===404 && <div>
                    <h3>Page Not Found</h3>
                    <Link to="/">GO Back</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;