import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
   const { _id, name, recipe, image, price } = item;
   const { user } = useContext(AuthContext);
   const [, refetch] = useCart();
   const navigate = useNavigate();
   const location = useLocation();

   const handleAddToCard = (item) => {
      if (user && user.email) {
         const cartItem = {menuItemId: _id, name, image, price, email: user.email}

         fetch('http://localhost:5000/carts', {
            method: 'POST',
            headers: {
               'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem)
         })
            .then((res) => res.json())
            .then((data) => {
               if (data.insertedId) {
                  refetch(); // refresh cart to update the number of items in the cart
                  Swal.fire({
                     title: 'Success',
                     text: 'Food added on the cart',
                     icon: 'success',
                     confirmButtonText: 'OK'
                  })
               }
            })
      }
      else {
         Swal.fire({
            title: 'Please login to order the food',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now!'
         }).then((result) => {
            if (result.isConfirmed) {
               navigate('/login', {state: {from: location}})
            }
         })
      }
   }

   return (
      <div className="card w-96 bg-base-100 shadow-md rounded-none">
         <figure><img src={image} alt="food" className="w-full" /></figure>
         <p className="absolute right-5 top-5 px-3 py-1 rounded-sm bg-slate-800 text-white font-semibold">${price}</p>

         <div className="card-body text-center bg-[#F3F3F3]">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <p>{recipe}</p>
            <div className="card-actions justify-center">
               <button onClick={() => handleAddToCard(item)} className="btn btn-outline border-0 border-b-4 mt-3 bg-[#E8E8E8] text-[#BB8506] hover:text-[#BB8506]">Add To Card</button>
            </div>
         </div>
      </div>
   );
};

export default FoodCard;