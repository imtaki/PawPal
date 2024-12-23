import '../index.css';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="App font-lusitana">
      <NavBar />
      <div className="page">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;