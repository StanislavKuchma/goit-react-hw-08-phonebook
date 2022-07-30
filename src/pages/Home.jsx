import Navigation from '../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
// import { useSelector } from 'react-redux';


const Home = () => {
  // const theme = useTheme();

  return (
    <>
      <Navigation />

      <Outlet />
    </>
  );
};

export default Home;
