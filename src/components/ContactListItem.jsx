import PropTypes from 'prop-types';
import { deleteContact } from './redux/contactSlice';
import { useDispatch } from 'react-redux';

export const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className="item_contact">
        {name}:{number}
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
