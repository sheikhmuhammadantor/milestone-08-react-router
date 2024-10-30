// import Posts from "./Posts"

import { Link, Outlet } from "react-router-dom"

function PostsParents() {
  return (
    // <Posts></Posts>
    <div>
        <h2>Im From Post Parents</h2>
        <Link to="post">
        <button className="mt-3">See Posts</button>
        </Link>
        <Outlet></Outlet>
    </div>

  )
}

export default PostsParents
