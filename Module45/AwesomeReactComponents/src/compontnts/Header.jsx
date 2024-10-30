import { NavLink } from "react-router-dom";
import PageTitle from "../utility/PageTitle";

export default function Header() {
  return (
    <div>
      <h1>This Is header Components - header</h1>
      <PageTitle title={"Header"}></PageTitle>
      <nav className="gap-4 flex justify-center my-8 p-2">
        <NavLink to='/' className={({ isActive }) => `border p-2 rounded-xl px-5 ${isActive ? "bg-cyan-400" : " "}`}>Home</NavLink>
        <NavLink to='contact' className={({ isActive }) => `border p-2 rounded-xl px-5 ${isActive ? "bg-cyan-400" : " "}`}>Contact</NavLink>
        <NavLink to='about' className={({ isActive }) => `border p-2 rounded-xl px-5 ${isActive ? "bg-cyan-400" : " "}`}>About</NavLink>
        <NavLink to='postparents' className={({ isActive }) => `border p-2 rounded-xl px-5 ${isActive ? "bg-cyan-400" : " "}`}>Posts</NavLink>
        <NavLink to='about/users' className={({ isActive }) => `border p-2 rounded-xl px-5 ${isActive ? "bg-cyan-400" : " "}`}>User</NavLink>
        <NavLink to='about/users/antor' className={({ isActive }) => `border p-2 rounded-xl px-5 ${isActive ? "bg-cyan-400" : " "}`}>Antor</NavLink>
      </nav>
    </div>
  )
}
