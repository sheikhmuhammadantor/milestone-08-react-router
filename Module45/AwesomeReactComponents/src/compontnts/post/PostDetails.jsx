import { useLoaderData } from "react-router-dom"

const PostDetails = () => {
    const data = useLoaderData();

    return (
        <div className="border p-3 rounded-xl space-y-3 mt-6">
            <h1 className="text-4xl">IM From PostDetails : {data.id}</h1>
            <p className="text-xl font-bold">Post Title : {data.title}</p>
            <p>Post Body : {data.body}</p>
        </div>
    )
}

export default PostDetails
