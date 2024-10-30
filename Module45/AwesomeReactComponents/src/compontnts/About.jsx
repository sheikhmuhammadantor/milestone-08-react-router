import { Outlet } from "react-router-dom";

export default function About() {
  return (
    <div>
        <h1>This is About Section</h1>
        <Outlet></Outlet>
    </div>
  )
}
