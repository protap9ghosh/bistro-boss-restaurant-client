import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet, FaCalendarAlt } from "react-icons/fa";
import { AiFillHome, AiOutlineMenu, AiFillShopping } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
   const [cart] = useCart();

   return (
      <div className="drawer drawer-mobile">
         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

         <div className="drawer-content flex flex-col items-center justify-center">

            <Outlet></Outlet>
            
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
         </div>

         <div className="drawer-side bg-[#D1A054]">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 text-base-content">
               <li><NavLink to="/dashboard/"><AiFillHome /> User Home</NavLink></li>
               <li><NavLink to="/dashboard/reservation"><FaCalendarAlt /> Reservation</NavLink></li>
               <li><NavLink to="/dashboard/history"><FaWallet /> Payment History</NavLink></li>
               <li>
                  <NavLink to="/dashboard/myCart">
                     <FaShoppingCart /> My Cart
                     <span className="badge badge-sm badge-secondary">+{cart?.length || 0}</span>
                  </NavLink>
               </li>

               <div className="divider"></div>

               <li><NavLink to="/"><AiFillHome /> Home</NavLink></li>
               <li><NavLink to="/menu"><AiOutlineMenu /> Menu</NavLink></li>
               <li><NavLink to="/shop"><AiFillShopping /> Shop</NavLink></li>
               <li><NavLink to="/contact"><MdEmail /> Contact</NavLink></li>
            </ul>
         </div>
      </div>
   );
};

export default Dashboard;