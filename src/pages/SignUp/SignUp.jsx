import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication1.png"
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const SignUp = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
   const navigate = useNavigate();
   const [error, setError] = useState('');

   const onSubmit = data => {
      // console.log(data);
      createUser(data.email, data.password)
         .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
               .then(() => {
                  reset();
                  Swal.fire({
                     title: 'Success',
                     text: 'User created Successfully',
                     icon: 'success',
                     confirmButtonText: 'OK'
                  })
                  logOut()
                     .then(() => {
                        navigate('/login')
                     })
               })
               .catch(error => setError(error.message));
         })
         .catch(error => setError(error.message));
   };

   return (
      <div>
         <Helmet>
            <title>Sign Up | Bistro Boss</title>
         </Helmet>

         <div className="hero min-h-screen bg-[url('https://i.ibb.co/HFNS46y/authentication.png')]">
            <div className="border-2 shadow-slate-600 shadow-xl md:m-20">
               <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="text-center md:w-1/2 lg:text-left">
                     <img src={img} alt="" className="w-[900px]" />
                  </div>

                  <div className="card md:w-1/2 max-w-sm rounded-md">
                     <h2 className="text-4xl font-bold text-center -mb-5">Sign Up</h2>
                     <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Name</span>
                           </label>
                           <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="input input-bordered" />
                           {errors.name && <small className="text-rose-500 font-semibold">Name is required</small>}
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Photo URL</span>
                           </label>
                           <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                           {errors.photoURL && <small className="text-rose-500 font-semibold">Photo URL is required</small>}
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Email</span>
                           </label>
                           <input type="email" {...register("email", { required: true })} placeholder="Your Email" className="input input-bordered" />
                           {errors.email && <small className="text-rose-500 font-semibold">Email is required</small>}
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Password</span>
                           </label>
                           <input type="password" {...register("password", {
                              required: true,
                              minLength: 6,
                              maxLength: 10,
                              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*])/
                           })} placeholder="Password" className="input input-bordered" />

                           {errors.password?.type === 'required' && <small className="text-rose-500 font-semibold">Password is required</small>}
                           {errors.password?.type === 'minLength' && <small className="text-rose-500 font-semibold">Password must be 6 characters</small>}
                           {errors.password?.type === 'maxLength' && <small className="text-rose-500 font-semibold">Password must be 10 characters</small>}
                           {errors.password?.type === 'pattern' && <small className="text-rose-500 font-semibold">Password must have one uppercase, lowercase, number and special characters</small>}
                        </div>

                        <div className="form-control mt-5">
                           <input type="submit" value="Sign Up" className="btn bg-[#D1A054] hover:bg-[#b98d4a] capitalize text-[16px] border-none" />
                        </div>
                     </form>
                     <p className="text-red-500 text-center font-semibold -mt-4">{error}</p>

                     <small className="text-center text-[#D1A054] mb-8 mt-4">Already Registered? <Link to="/login" className="font-semibold">Go to log in</Link></small>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;