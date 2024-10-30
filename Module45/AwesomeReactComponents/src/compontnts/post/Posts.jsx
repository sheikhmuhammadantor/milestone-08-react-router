import { useLoaderData } from "react-router-dom";
import Post from "./Post";

const Posts = () => {

    const posts = useLoaderData();
    console.log(posts);

  return (
    <div>
      <h1>IM From Postssss : {posts.length}</h1>
      <div className="grid grid-cols-2 gap-5 mt-8">
        {
            posts.map(post => <Post key={post.id} post={post}></Post>)
        }
      </div>
    </div>
  )
}

export default Posts
