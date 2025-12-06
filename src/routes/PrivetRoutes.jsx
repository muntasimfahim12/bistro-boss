import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

// Optional: Professional spinner
const Spinner = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Firebase auth state load hocche
  if (loading) {
    return <Spinner />;
  }

  // User login thakle children render hobe
  if (user) {
    return children;
  }

  // User login na thakle login page e redirect koro
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
