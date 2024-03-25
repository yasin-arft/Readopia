import { NavLink } from "react-router-dom";

const NavListItems = () => {
  return (
    <>
      <li><NavLink>Home</NavLink></li>
      <li><NavLink>Listed Books</NavLink></li>
      <li><NavLink>Pages to Read</NavLink></li>
    </>
  );
};

export default NavListItems;