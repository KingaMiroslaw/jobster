import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children }) {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <Navigate to="/jobster" />;
  }
  return children;
}

export default ProtectedRoute;
