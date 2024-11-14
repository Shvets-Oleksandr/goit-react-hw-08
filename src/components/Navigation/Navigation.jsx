import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const isActiveLink = ({ isActive }) => clsx(css.link, isActive && css.active);

  return (
    <nav>
      <NavLink className={isActiveLink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={isActiveLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
