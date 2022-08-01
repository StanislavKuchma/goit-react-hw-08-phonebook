import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useDeleteProductMutation } from '../redux/contactsApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader';

export const ContactListItem = ({ id, i, name, number }) => {
  const [deleteContact, { isError, isLoading }] = useDeleteProductMutation();

  const handleDeleteContact = async () => {
    await deleteContact(id).unwrap();
    toast.info(`Contacts  ${name} delete`);
  };

  const variants = {
    visible: i => ({
      opacity: 1,
      transition: { delay: i * 0.1 },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <>
      <ToastContainer autoClose={2500} />
      {isError && toast.error(`Sorry try again`)}
      <motion.li
        className="item_contact"
        style={{
          display: 'flex',
          alignItems: 'baseline',
          fontWeight: 'bold',
        }}
        variants={variants}
        initial="hidden"
        animate="visible"
        custom={i}
      >
        {name}:&nbsp; {number}
        <button
          onClick={() => handleDeleteContact(id)}
          style={{
            marginLeft: 50,
            paddingBottom: 30,
          }}
        >
          {isLoading ? <Loader size={14} /> : 'Delete'}
        </button>
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
