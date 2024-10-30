import { useLoaderData } from "react-router-dom"
import User from "./User";

const UserAll = () => {
    const users = useLoaderData();
    // console.log(users);

  return (
    <div className="grid grid-cols-3 gap-5 my-8">
      {
        users.map((user) => <User key={user.id} user={user}></User>)
      }
    </div>
  )
}

export default UserAll
