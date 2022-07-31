import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu/UserMenu';
import AuthNav from 'components/AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <div className={s.app}>
      <NavLink className={s.navlink} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={s.navlink} to="/contacts">
          Contacts
        </NavLink>
      )}

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
export default Navigation;
