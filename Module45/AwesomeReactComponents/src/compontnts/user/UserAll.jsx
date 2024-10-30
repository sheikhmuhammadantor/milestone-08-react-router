import { Outlet, useLoaderData } from "react-router-dom"
import User from "./User";
import PageTitle from "../../utility/PageTitle";

const UserAll = () => {
  const users = useLoaderData();

  return (
    <section>
      <PageTitle title={"UserAll"}></PageTitle>
      <Outlet></Outlet>
      <h1>User Data : {users.length}</h1>
      <div className="grid grid-cols-3 gap-5 my-8">
        {
          users.map((user) => <User key={user.id} user={user}></User>)
        }
      </div>
    </section>
  )
}

export default UserAll
