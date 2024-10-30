const User = ({user}) => {
  return (
    <div className="p-2 border rounded-xl">
        <p className="text-xl">User Name: {user.name}</p>
        <p className="text-xl">User Web: {user.website}</p>
    </div>
  )
}

export default User
