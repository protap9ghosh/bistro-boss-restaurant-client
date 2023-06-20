import logo from "../../../assets/logo.png";

const Footer = () => {
   return (
      <footer>
         <div className="footer p-20 bg-sky-950 text-neutral-content">
            <div>
               <img src={logo} alt="Logo" className="w-24" />
               <p>Bistro Boss Industries Ltd.<br />Providing reliable tech since 1992</p>
            </div>

            <div>
               <span className="footer-title">Services</span>
               <a className="link link-hover">Branding</a>
               <a className="link link-hover">Design</a>
               <a className="link link-hover">Marketing</a>
               <a className="link link-hover">Advertisement</a>
            </div>
            <div>
               <span className="footer-title">Company</span>
               <a className="link link-hover">About us</a>
               <a className="link link-hover">Contact</a>
               <a className="link link-hover">Jobs</a>
               <a className="link link-hover">Press kit</a>
            </div>
            <div>
               <span className="footer-title">Legal</span>
               <a className="link link-hover">Terms of use</a>
               <a className="link link-hover">Privacy policy</a>
               <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
               <span className="footer-title">Newsletter</span>
               <div className="form-control w-80">
                  <label className="label">
                     <span className="label-text text-white">Enter your email address</span>
                  </label>
                  <div className="relative">
                     <input type="email" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                     <button className="btn bg-[#D1A054] hover:bg-[#b98d4a] border-none absolute top-0 right-0 rounded-l-none">Subscribe</button>
                  </div>
               </div>
            </div>
         </div>

         <div className="footer-center p-4 bg-slate-200 text-base-content">
            <p>Copyright © {new Date().getFullYear()} - All right reserved by Bistro Boss Ltd</p>
         </div>
      </footer>
   );
};

export default Footer;