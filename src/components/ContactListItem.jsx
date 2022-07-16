import PropTypes from 'prop-types';
import { deleteContact } from '../redux/contactSlice';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

export const ContactListItem = ({ id, i, name, number }) => {
  const dispatch = useDispatch();

  const variants = {
    visible: i => ({
      opacity: 1,
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <>
      <motion.li
        className="item_contact"
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={i}
      >
        {name}:{number}
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </motion.li>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  i: PropTypes.number,
  name: PropTypes.string,
  number: PropTypes.string,
};
// https://62d266dcafb0b03fc5a5e09a.mockapi.io/api/:endpoint
