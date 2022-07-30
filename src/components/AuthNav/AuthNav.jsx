import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={s.authNav}>
      <NavLink className={s.navlink} to="/login">
        Login
      </NavLink>

      <NavLink className={s.navlink} to="/auth">
        Auth
      </NavLink>
    </div>
  );
}
