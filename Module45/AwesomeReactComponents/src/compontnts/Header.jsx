import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <h1>This Is header Components - header</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </nav>
    </div>
  )
}
