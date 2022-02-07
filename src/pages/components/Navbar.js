import { Link } from "gatsby"

function Navbar() {
  return (
    <nav>
      <h1>Web Warrior</h1>
      <div className="links">
        <Link to="/">
          <a>Home</a>
        </Link>
        <Link to="/about">
          <a>About</a>
        </Link>
        <Link to="/projects">
          <a>Projects</a>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
