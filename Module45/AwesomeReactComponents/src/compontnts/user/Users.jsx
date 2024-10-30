import { Link, Outlet } from "react-router-dom"
import PageTitle from "../../utility/PageTitle"

function Users() {
  return (
    <div>
      <PageTitle title={"Users"}></PageTitle>
        <h1 className="mb-8">Im from Userrrrrrrs</h1>
          <Link to='userall'>
          <button>Load All User</button>
          </Link>
        <Outlet></Outlet>
    </div>
  )
}

export default Users
