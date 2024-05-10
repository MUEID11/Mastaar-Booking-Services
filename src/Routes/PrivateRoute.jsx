import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
    const {loading, user} = useAuth();
    const location = useLocation();
    if(loading){
        <div className="relative h-[65vh] flex items-center justify-center">
        <span className="loading loading-spinner text-info loading-md absolute top-50 translate-y-5"></span>
      </div>
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace={true}></Navigate>
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired, 
  };
export default PrivateRoute;