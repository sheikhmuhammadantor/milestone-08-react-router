import { useLoaderData, useNavigate, useParams } from "react-router-dom"

const PostDetails = () => {
    const data = useLoaderData();
    const myParams = useParams();
    
    const navigate = useNavigate();
    const handelBack = () => {
        navigate(-1);
    }
    

    return (
        <div className="border p-3 rounded-xl space-y-3 mt-6">
            <h1 className="text-4xl">IM From PostDetails : {data.id}</h1>
            <p>By useParams Hook : {myParams.postId}</p>
            <p className="text-xl font-bold">Post Title : {data.title}</p>
            <p>Post Body : {data.body}</p>
            <button onClick={handelBack} className="mt-2 btn">Go Back</button>
        </div>
    )
}

export default PostDetails
