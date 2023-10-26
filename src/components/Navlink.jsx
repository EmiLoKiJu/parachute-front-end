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
        ].join(" ")
      }
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