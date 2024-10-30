import { useLoaderData } from "react-router-dom"

function UserDetails() {

    const data = useLoaderData();
    console.log(data);

  return (
    <div className="mt-5 border p-3 rounded-2xl space-y-3">
      <h2 className="text-4xl">User Name: {data.name}</h2>
      <p>User Website: {data.website}</p>
      <p>UserName: {data.username}</p>
      <p>User Phone: {data.phone}</p>
    </div>
  )
}

export default UserDetails
