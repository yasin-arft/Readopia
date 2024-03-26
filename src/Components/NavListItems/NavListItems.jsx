import { NavLink } from "react-router-dom";

const NavListItems = () => {
  return (
    <>
      <li><NavLink to={'/'}>Home</NavLink></li>
      <li><NavLink to={'/listed_books'}>Listed Books</NavLink></li>
      <li><NavLink to={'/pages_to_read'}>Pages to Read</NavLink></li>
    </>
  );
};

export default NavListItems;