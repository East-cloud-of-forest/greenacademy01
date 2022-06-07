import { NavLink, Outlet } from "react-router-dom"

const Layout = () => {
  const navstyle = {
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    margin: "0 5px"
  }

  const activenavstyle = {
    textDecoration: "none",
    color: "green",
    fontWeight: "bold",
    margin: "0 5px"
  }

  return (
    <>
      <nav>
        <NavLink to="/"
          style={({isActive})=> isActive? activenavstyle: navstyle}
        >Home</NavLink>
        <span>|</span>
        <NavLink to="/about"
          style={({isActive})=> isActive? activenavstyle: navstyle}
        >About</NavLink>
        <span>|</span>
        <NavLink to="/board"
          style={({isActive})=> isActive? activenavstyle: navstyle}
        >Board</NavLink>
      </nav>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default Layout