import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import authOperations from '../../redux/auth/auth-operations';
import { getUsername } from '../../redux/auth/auth-selectors';
import { VscAccount } from 'react-icons/vsc';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);

  return (
    <div className={s.userMenu}>
      <span>
        <VscAccount size="24px" />
      </span>
      <h6>Welcome {name}</h6>

      <Button
        variant="primary"
        style={{ padding: 0 }}
        type="submit"
        onClick={() => dispatch(authOperations.logOut())}
      >
        LogOut
      </Button>

      {/* <button type="button"></button> */}
    </div>
  );
}
