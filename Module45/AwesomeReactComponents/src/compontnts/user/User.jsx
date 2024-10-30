import { Link } from "react-router-dom"
import PageTitle from "../../utility/PageTitle"

const User = ({user}) => {
  return (
    <div className="p-2 border rounded-xl">
        <PageTitle title={"User"}></PageTitle>
        <p className="text-xl">User Name: {user.name}</p>
        <p className="text-xl">User Web: {user.website}</p>
        <Link to="">
        <button className="btn m-2">Details</button></Link>
    </div>
  )
}

export default User
