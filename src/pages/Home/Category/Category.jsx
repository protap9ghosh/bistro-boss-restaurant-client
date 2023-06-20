import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../componets/SectionTitle/SectionTitle";

const Category = () => {
   return (
      <section>
         <SectionTitle
            subHeading={"From 11:00am to 10:00pm"}
            heading={"ORDER ONLINE"}
         >
         </SectionTitle>

         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mt-10 mb-14"
         >
            <SwiperSlide>
               <img src={slide1} alt="Slider" />
               <h3 className="md:text-4xl uppercase text-center -mt-16 mb-16 text-white ">salads</h3>
            </SwiperSlide>

            <SwiperSlide>
               <img src={slide2} alt="Slider" />
               <h3 className="md:text-4xl uppercase text-center -mt-16 mb-16 text-white ">soups</h3>
            </SwiperSlide>

            <SwiperSlide>
               <img src={slide3} alt="Slider" />
               <h3 className="md:text-4xl uppercase text-center -mt-16 mb-16 text-white ">pizza</h3>
            </SwiperSlide>

            <SwiperSlide>
               <img src={slide4} alt="Slider" />
               <h3 className="md:text-4xl uppercase text-center -mt-16 mb-16 text-white ">desserts</h3>
            </SwiperSlide>

            <SwiperSlide>
               <img src={slide5} alt="Slider" />
               <h3 className="md:text-4xl uppercase text-center -mt-16 mb-16 text-white ">salads</h3>
            </SwiperSlide>

         </Swiper>
      </section>
   );
};

export default Category;