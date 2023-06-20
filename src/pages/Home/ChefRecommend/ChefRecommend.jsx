import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
import img1 from "../../../assets/home/slide4.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide5.jpg"

const ChefRecommend = () => {
   return (
      <div className="mt-14">
         <SectionTitle
            subHeading={'Should Try'}
            heading={'CHEF RECOMMENDS'}
         ></SectionTitle>

         <div className="flex justify-center gap-7 mt-10">
            <div className="w-96 bg-base-100 shadow-md">
               <figure><img src={img1} alt="Shoes" className="w-screen h-[380px]"/></figure>
               <div className="card-body text-center bg-[#F3F3F3]">
                  <h2 className="text-2xl font-semibold">Caeser Salad</h2>
                  <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                  <div className="card-actions justify-center">
                     <button className="btn btn-outline border-0 border-b-4 mt-3 bg-[#E8E8E8] text-[#BB8506] hover:text-[#BB8506]">Add To Card</button>
                  </div>
               </div>
            </div>

            <div className="w-96 bg-base-100 shadow-md">
               <figure><img src={img2} alt="Shoes" className="w-screen h-[380px] "/></figure>
               <div className="card-body text-center bg-[#F3F3F3]">
                  <h2 className="text-2xl font-semibold">Caeser Salad</h2>
                  <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                  <div className="card-actions justify-center">
                     <button className="btn btn-outline border-0 border-b-4 mt-3 bg-[#E8E8E8] text-[#BB8506] hover:text-[#BB8506]">Add To Card</button>
                  </div>
               </div>
            </div>

            <div className="w-96 bg-base-100 shadow-md">
               <figure><img src={img3} alt="Shoes" className="w-screen h-[380px]"/></figure>
               <div className="card-body text-center bg-[#F3F3F3]">
                  <h2 className="text-2xl font-semibold">Caeser Salad</h2>
                  <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                  <div className="card-actions justify-center">
                     <button className="btn btn-outline border-0 border-b-4 mt-3 bg-[#E8E8E8] text-[#BB8506] hover:text-[#BB8506]">Add To Card</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ChefRecommend;