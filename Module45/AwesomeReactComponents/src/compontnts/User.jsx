import { Outlet } from "react-router-dom"

function User() {
  return (
    <div>
        <h1>Im from User</h1>
        <Outlet></Outlet>
    </div>
  )
}

export default User
