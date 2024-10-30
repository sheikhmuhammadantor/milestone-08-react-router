import { Link, Outlet } from "react-router-dom"

function Users() {
  return (
    <div>
        <h1 className="mb-8">Im from Userrrrrrrs</h1>
          <Link to='userall'>
          <button>Load All User</button>
          </Link>
        <Outlet></Outlet>
    </div>
  )
}

export default Users
