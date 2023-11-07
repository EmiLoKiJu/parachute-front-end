import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

import { setOff } from "@/redux/Humberger/humbergerSlice.js"

const NavL = ({label, href}) => {
  const dispatch = useDispatch();

  const switchHandler = () => {
    dispatch(setOff())
  }

  return(
    <NavLink
      to={href}
      className={({ isActive, isPending, isTransitioning }) =>
        [
          isPending ? "pending" : "",
          isActive ? "active" : "",
          isTransitioning ? "transitioning" : "",
          "py-2 px-3 w-full uppercase hover:text-white hover:bg-brand_green",
          "font-viga tracking-wider"
        ].join(" ")
      }

      onClick={switchHandler}
    >
      {label}
    </NavLink>
  );
}

// PropTypes validation
NavL.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavL;