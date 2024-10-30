import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const Post = ({post}) => {
  return (
    <div className="border rounded-xl p-3 space-y-4">
      <h2 className="text-4xl">Post Id : {post.id}</h2>
      <p className="text-2xl font-bold">{post.title}</p>
      <p className="">{post.body}</p>
      <Link to={`${post.id}`}>
      <button className="mt-5">View Details</button></Link>
    </div>
  )
}

export default Post
