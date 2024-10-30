import { Outlet } from "react-router-dom";
import PageTitle from "../utility/PageTitle";

export default function About() {
  return (
    <div>
        <h1>This is About Section</h1>
        <PageTitle title={'About'}></PageTitle>
        <Outlet></Outlet>
    </div>
  )
}
