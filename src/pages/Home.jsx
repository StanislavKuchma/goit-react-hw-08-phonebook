import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import phoonebook from '../images/phoonebook.jpg';

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${phoonebook})`,
        minHeight: 'calc(100vh - 5px)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Navigation />
      <Outlet style={{ backgroundColor: 'none' }} />
    </div>
  );
};
export default Home;
