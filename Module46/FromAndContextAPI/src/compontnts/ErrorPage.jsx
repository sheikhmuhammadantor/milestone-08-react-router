import { Link, useNavigate } from "react-router-dom"
import PageTitle from "../utility/PageTitle";

function ErrorPage() {

    const navigate = useNavigate();

    const handelBack = () => {
        navigate(-1);
    }
    return (
        <div className="space-y-4">
            <div>
            <h1>Oops !</h1>
            <p className="text-2xl">Something Wrong Happen !</p>
            </div>
            <Link to="/">
                <button className="text-xl mt-8">Go App</button>
            </Link>
            <PageTitle title={"Error"}></PageTitle>
            <button onClick={handelBack} className="text-xl mt-8 ml-4">Go Back</button>

        </div>
    )
}

export default ErrorPage
