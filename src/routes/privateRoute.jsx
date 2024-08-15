import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/providers/useAuth";
import { FaSpinner } from "react-icons/fa";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="h-screen flex items-center">
        <FaSpinner className="h-36 w-36 m-auto animate-spin py-10" />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
