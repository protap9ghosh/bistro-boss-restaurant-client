import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
import { RiDeleteBin5Fill } from "react-icons/ri"
import Swal from "sweetalert2";

const MyCart = () => {
   const [cart, refetch] = useCart();
   // console.log(cart);
   const total = cart.reduce((sum, item) => item.price + sum, 0)

   const handleDelete = (item) => {
      Swal.fire({
         title: 'Are you sure?',
         text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
         if (result.isConfirmed) {
            fetch(`http://localhost:5000/carts/${item._id}`, {
               method: 'DELETE',
            })
               .then((res) => res.json())
               .then((data) => {
                  if (data.deletedCount > 0) {
                     refetch();
                     Swal.fire(
                        'Deleted!',
                        'Your Food has been deleted.',
                        'success'
                     )
                  }
               })
         }
      })
   }

   return (
      <div className="w-full px-8">
         <Helmet>
            <title>My Cart | Bistro Boss Restaurant</title>
         </Helmet>

         <SectionTitle
            subHeading="My Cart"
            heading="Wanna Add More"
         ></SectionTitle>

         <div className="uppercase font-semibold flex justify-between h-14 items-center mt-14">
            <h2 className="text-2xl">Total Order: {cart.length}</h2>
            <h2 className="text-2xl">Total Price: ${total}</h2>
            <button className="btn bg-[#D1A054] hover:bg-[#f7bb62] btn-sm border-none">Pay</button>
         </div>

         <div className="overflow-x-auto w-full">
            <table className="table w-full">
               {/* head */}
               <thead>
                  <tr>
                     <th className="bg-[#D1A054]">#</th>
                     <th className="bg-[#D1A054]">Item Image</th>
                     <th className="bg-[#D1A054]">Item Name</th>
                     <th className="bg-[#D1A054]">Price</th>
                     <th className="bg-[#D1A054]">Action</th>
                  </tr>
               </thead>
               <tbody>

                  {
                     cart.map((item, index) => (
                        <tr key={item._id}>

                           <td>{index + 1}</td>
                           <td>
                              <div className="avatar">
                                 <div className="mask w-20 h-20 rounded-md">
                                    <img src={item.image} alt="Food" />
                                 </div>
                              </div>
                           </td>

                           <td className="font-bold">{item.name}</td>
                           <td className="text-end">${item.price}</td>
                           <td>
                              <button onClick={() => handleDelete(item)} className="btn px-3 border-none bg-rose-600 hover:bg-rose-700">
                                 <RiDeleteBin5Fill className="text-xl" />
                              </button>
                           </td>
                        </tr>
                     ))
                  }

               </tbody>
            </table>
         </div>
      </div >
   );
};

export default MyCart;