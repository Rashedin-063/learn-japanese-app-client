/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';
import useTheme from '../hooks/useTheme';

const Menu = ({ filteredItems = [] }) => {
  const {theme} = useTheme()
  return (
    <Fade cascade damping={0.3}>
      <ul
        className={`lg:flex lg:justify-end lg:items-center lg:space-x-6 xl:space-x-12 lg:text-lg space-y-4 px-1  lg:space-y-0 font-yujiMai   ${theme?.colors.primary} font-semibold`}
      >
        {filteredItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? 'border-b-2 rounded-lg border-zen-charcoal px-1 text-lg lg:text-xl font-semibold'
                  : 'px-1 lg:text-lg hover:border-b-2 border-zen-charcoal'
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </Fade>
  );
};

Menu.propTypes = {
  items: PropTypes.array,
};

export default Menu;