/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Fade } from 'react-awesome-reveal';

const Menu = ({ filteredItems = [] }) => {  

  return (
    <Fade cascade damping={0.3}>
      <ul className='lg:flex lg:justify-end lg:items-center lg:space-x-6 xl:space-x-12 lg:text-lg space-y-4 lg:space-y-0 font-yujiMai'>
       
        {filteredItems.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? ' text-green-lantern border-b-2 rounded-lg border-deep-ocean px-3 py-2 text-lg lg:text-xl font-semibold'
                  : 'px-1 hover:border-b-2  border-green-lantern text-deep-ocean hover:transition lg:text-lg hover:font-semibold '
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
}

export default Menu;
