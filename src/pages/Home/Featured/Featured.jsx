import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
import img from "../../../assets/home/featured.jpg"
import "./Featured.css"

const Featured = () => {
   return (
      <div className="featured-item bg-fixed text-white my-20">
         <div className="bg-slate-900 bg-opacity-40 pt-10">
            <SectionTitle
               subHeading="Check it out"
               heading="FROM OUR MENU"
            ></SectionTitle>

            <div className="md:flex justify-center items-center pb-16 pt-10 px-32">
               <div className="md:mr-10">
                  <img src={img} alt="" className="rounded-md" />
               </div>
               <div>
                  <p>March 20, 2023</p>
                  <p className="text-2xl uppercase">Where can i get some?</p>
                  <p>Consectetur adipisicing elit. Odio quibusdam, earum eaque nesciunt quisquam modi est ratione dicta veritatis magnam sunt natus exercitationem, dolore consectetur assumenda commodi nam, eligendi provident!</p>
                  <button className="btn btn-outline border-0 border-b-4 text-white hover:text-[#D99904] mt-8">Read more</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Featured;