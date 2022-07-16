import PropTypes from 'prop-types';
import { deleteContact } from './redux/contactSlice';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

export const ContactListItem = ({ id, i, name, number }) => {
  const variants = {
    visible: i => ({
      opacity: 1,
      transition: { delay: i * 0.5 },
    }),
    hidden: { opacity: 0 },
  };
  const dispatch = useDispatch();
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
  name: PropTypes.string,
  number: PropTypes.string,
};
