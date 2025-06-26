import { NavLink } from "react-router-dom";

const NavBar = () => {
  return <div className="NavBar">
    <NavLink>Message</NavLink>
    <NavLink>Friends</NavLink>
    <NavLink>Profile</NavLink>
  </div>;
};

export default NavBar;
