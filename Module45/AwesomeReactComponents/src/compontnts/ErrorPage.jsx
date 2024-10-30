import { Link, useNavigate, useRouteError } from "react-router-dom"

function ErrorPage() {

    const navigate = useNavigate();

    const handelBack = () => {
        navigate(-1);
    }

    const goError = useRouteError();
    // console.log(goError);

    return (
        <div className="space-y-4">
            <div>
            <h1>Oops !</h1>
            <p className="text-2xl">Something Wrong Happen !</p>
            <p>{goError.data}</p>
            <p>{goError.error.stack}</p>
            <p>{goError.error.name}</p>
            <p>{goError.status}</p>
            <p>{goError.statusText}</p>
            <p>{goError.internal.toString()}</p>
            </div>
            <Link to="/">
                <button className="text-xl mt-8">Go Home</button>
            </Link>

            <button onClick={handelBack} className="text-xl mt-8 ml-4">Go Back</button>

        </div>
    )
}

export default ErrorPage
