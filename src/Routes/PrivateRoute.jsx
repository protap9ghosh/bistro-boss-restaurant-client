import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { RotatingLines } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
   const { user, loading } = useContext(AuthContext);
   const location = useLocation();

   if (loading) {
      return (
         <div className="w-96 mx-auto">
            <RotatingLines
               strokeColor="#f28482"
               strokeWidth="5"
               animationDuration="0.75"
               width="96"
               visible={true}
            />
         </div>
      )
   }

   if (user) {
      return children;
   }

   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;