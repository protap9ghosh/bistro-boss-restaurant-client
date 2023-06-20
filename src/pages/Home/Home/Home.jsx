import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefService from "../ChefService/ChefService";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import ChefRecommend from "../chefRecommend/chefRecommend";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Home | Bistro Boss Restaurant</title>
         </Helmet>
         
         <Banner></Banner>
         <Category></Category>
         <ChefService></ChefService>
         <PopularMenu></PopularMenu>
         <CallUs></CallUs>
         <ChefRecommend></ChefRecommend>
         <Featured></Featured>
         <Testimonials></Testimonials>
      </div>
   );
};

export default Home;