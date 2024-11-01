import { Outlet } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import './App.css'
import PageTitle from './utility/PageTitle';



function App() {
  return (
    <>
      <h1>This Is App Jsx</h1>
      <nav className="gap-4 flex justify-center my-8 p-2">
        <NavLink to='/home' className={({ isActive }) => `border p-2 rounded-xl px-5 ${isActive ? "bg-cyan-400" : " "}`}>Home</NavLink>
      </nav>
      <PageTitle title={"App"}></PageTitle>
      <Outlet></Outlet>
    </>
  )
}

export default App
