import { Link } from "react-router-dom";
import PageTitle from "../utility/PageTitle";

export default function Header() {
  return (
    <div>
      <h1>This Is header Components - header</h1>
      <PageTitle title={"Header"}></PageTitle>
      <nav className="gap-4 flex justify-center my-8 p-2">
        <Link to='/' className="border p-2 rounded-xl px-5">Home</Link>
        <Link to='contact' className="border p-2 rounded-xl px-5">Contact</Link>
        <Link to='about' className="border p-2 rounded-xl px-5">About</Link>
        <Link to='about/user' className="border p-2 rounded-xl px-5">User</Link>
        <Link to='about/user/antor' className="border p-2 rounded-xl px-5">Antor</Link>
      </nav>
    </div>
  )
}
