import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/others/authentication1.png"
import Swal from 'sweetalert2'

const Login = () => {
   const [disabled, setDisabled] = useState(true);
   const { signIn } = useContext(AuthContext);
   const [error, setError] = useState('');
   const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.from?.pathname || "/";

   useEffect(() => {
      loadCaptchaEnginge(6);
   }, [])

   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password);

      signIn(email, password)
         .then((result) => {
            const user = result.user;
            // console.log(user);
            Swal.fire({
               title: 'Success',
               text: 'User Successfully signed',
               icon: 'success',
               confirmButtonText: 'OK'
            })
            navigate(from, { replace: true });
         })
         .catch(error => setError(error.message))
   }

   const handleValidateCaptcha = (event) => {
      const user_captcha_value = event.target.value;
      if (validateCaptcha(user_captcha_value) == true) {
         setDisabled(false);
      }
      else {
         setDisabled(true);
      }
   }

   return (
      <div>
         <Helmet>
            <title>Login | Bistro Boss</title>
         </Helmet>

         <div className="hero min-h-screen bg-[url('https://i.ibb.co/HFNS46y/authentication.png')]">
            <div className="border-2 shadow-slate-600 shadow-xl md:m-20">
               <div className="hero-content flex-col lg:flex-row">
                  <div className="text-center md:w-1/2 lg:text-left">
                     <img src={img} alt="" className="w-[900px]" />
                  </div>

                  <div className="card md:w-1/2 max-w-sm rounded-md">
                     <h2 className="text-4xl font-bold text-center -mb-5">LogIn</h2>
                     <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Email</span>
                           </label>
                           <input type="email" name="email" placeholder="Your Email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <span className="label-text font-semibold">Password</span>
                           </label>
                           <input type="password" name="password" placeholder="Password" className="input input-bordered" />
                           <label className="label">
                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                           </label>
                        </div>

                        <div className="form-control">
                           <label className="label">
                              <LoadCanvasTemplate />
                           </label>

                           <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Type the Captcha" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                           <input disabled={disabled} type="submit" value="Sign In" className="btn bg-[#D1A054] hover:bg-[#b98d4a] capitalize text-[16px] border-none" />
                        </div>
                     </form>
                     <p className="text-red-500 text-center font-semibold -mt-4">{error}</p>

                     <small className="text-center text-[#D1A054] mb-8">New Here? <Link to="/signUp" className="font-semibold">Create a New Account</Link></small>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;