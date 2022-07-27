import { render } from "react-dom";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Protected = ({ isAdmin, element: Element }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.User);
  if (loading === false) {
    if (isAuthenticated === false) {
      return <Navigate to="/login" />;
    }

    if (isAdmin === true && user && user.Role !== "admin") {
      return <Navigate to="/login" />;
    }
    return Element;
  }
};

export default Protected;
