import { Outlet } from "react-router-dom";
import './Layout.scss';
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <>
    <div>
      <header>
        <h1>HTK APPEN</h1>
        <div className="logo"><span>HTK</span></div>        
      </header>      
      <Navbar />
    </div>

    <Outlet />

    </>
  )
};

export default Layout;