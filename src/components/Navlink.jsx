import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

export default function NavL({label, href}) {
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

      onClick={() => console.log('Update state')}
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