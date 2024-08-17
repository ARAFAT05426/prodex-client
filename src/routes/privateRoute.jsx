import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Loader from "../componets/loader/loader";
import useAuth from "../hooks/providers/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">

        <Loader />
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
