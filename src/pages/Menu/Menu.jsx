import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import img from "../../assets/menu/banner3.jpg"
import dessertImg from "../../assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../assets/menu/pizza-bg.jpg"
import saladImg from "../../assets/menu/salad-bg.jpg"
import soupImg from "../../assets/menu/soup-bg.jpg"
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../componets/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';

const Menu = () => {
   const [menu] = useMenu();
   const desserts = menu.filter(item => item.category === 'dessert');
   const soup = menu.filter(item => item.category === 'soup');
   const salad = menu.filter(item => item.category === 'salad');
   const pizza = menu.filter(item => item.category === 'pizza');
   const offered = menu.filter(item => item.category === 'offered');

   return (
      <div>
         <Helmet>
            <title>Menu | Bistro Boss</title>
         </Helmet>
         
         <Cover
            img={img}
            title={'Our menu'}
            content={'Would you like to try a dish?'}
         ></Cover>

         {/* Main Cover*/}
         <div className="my-20">
            <SectionTitle subHeading={"Don't Miss"} heading={"Today's Offer"}></SectionTitle>
            <MenuCategory items={offered}></MenuCategory>
         </div>

         {/* Desser menu items */}
         <MenuCategory
            items={desserts}
            img={dessertImg}
            title={"dessert"}
            content={'Excepturi pariatur quisquam id, veniam dolorem perspiciatis nam consectetur! Cum a commodi, incidunt minima expedita neque veniam porro corrupti sapiente accusamus.'}
         ></MenuCategory>

         {/* Pizza menu items */}
         <MenuCategory
            items={pizza}
            img={pizzaImg}
            title={"pizza"}
            content={'Consectetur adipisicing elit. Excepturi pariatur quisquam id, veniam dolorem perspiciatis nam consectetur! Cum a commodi, incidunt minima expedita neque veniam porro corrupti sapiente accusamus distinctio.'}
         ></MenuCategory>

         {/* Salad menu items */}
         <MenuCategory
            items={salad}
            img={saladImg}
            title={"salad"}
            content={'Minima aperiam repellendus, eveniet ducimus placeat? Rem sunt cupiditate numquam doloremque eligendi, laborum, aspernatur quia incidunt sint impedit excepturi facere libero et deserunt veritatis cumque eum dignissimos voluptatem consectetur tenetur neque vero dolores.'}
         ></MenuCategory>

         {/* Suop menu items */}
         <MenuCategory
            items={soup}
            img={soupImg}
            title={"soup"}
            content={'Ratione repellendus possimus atque aperiam est sint enim laudantium numquam cupiditate culpa amet ullam et, consequatur saepe excepturi explicabo nisi eum alias accusamus maxime quibusdam! Labore soluta quia nostrum ab nam cupiditate distinctio adipisci, iste amet fugiat ullam sunt, voluptatibus nulla velit vitae deserunt? Necessitatibus cumque laborum doloribus, iste voluptatibus id omnis maxime quisquam.'}
         ></MenuCategory>
      </div>
   );
};

export default Menu;