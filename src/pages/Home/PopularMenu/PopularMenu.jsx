import SectionTitle from "../../../componets/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
   const [menu] = useMenu();
   const popular = menu.filter(item => item.category === 'popular');

   return (
      <section className="my-20">
         <SectionTitle
            subHeading={'Check it out'}
            heading={'from our menu'}
         ></SectionTitle>

         <div className="grid md:grid-cols-2 gap-8 mt-10">
            {
               popular.map(item => <MenuItem
                  key={item.key}
                  item={item}
               ></MenuItem>)
            }
         </div>

         <div className="flex justify-center">
            <button className="btn btn-outline border-0 border-b-4 mt-8">View Full Menu</button>
         </div>
      </section>
   );
};

export default PopularMenu;