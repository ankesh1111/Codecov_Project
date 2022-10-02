import { AuthContext } from "../Context/AuthContext";

const { useContext } = require("react");
const { Navigate } = require("react-router-dom");

function PrivateRoute({ children }) {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/" />;
  }
  return children;
}
export default PrivateRoute;
