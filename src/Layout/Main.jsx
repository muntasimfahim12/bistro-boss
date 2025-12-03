import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import Navbar from "../pages/Shared/Navabr/Navbar";

const Main = () => {
  const location = useLocation();

  // Check if current path includes "login" or "signup"
  const noHeaderFooter = ['/login', '/signup'].some(path => location.pathname.includes(path));

  return (
    <div>
      {!noHeaderFooter && <Navbar />}
      <Outlet />
      {!noHeaderFooter && <Footer />}
    </div>
  );
};

export default Main;
