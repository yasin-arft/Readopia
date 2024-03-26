import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const NavListItems = ({ item }) => {
  const { text, route } = item;
  return (
    <>
      <li className=""><NavLink to={route}
        className={({ isActive }) =>
          isActive ? "text-green font-semibold border border-green focus:text-green focus:bg-transparent" : ""
        }
      >{text}</NavLink></li>
    </>
  );
};

NavListItems.propTypes = {
  item: PropTypes.object
};

export default NavListItems;