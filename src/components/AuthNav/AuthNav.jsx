import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  const isActiveLink = ({ isActive }) => clsx(css.link, isActive && css.active);
  return (
    <div>
      <NavLink className={isActiveLink} to="/register">
        Registration
      </NavLink>
      <NavLink className={isActiveLink} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
