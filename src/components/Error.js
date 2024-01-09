import { useRouteError } from "react-router-dom";

const Error = () => {

    const error = useRouteError()

    return <div>
        Error page - {error.statusText}
    </div>
}

export default Error;