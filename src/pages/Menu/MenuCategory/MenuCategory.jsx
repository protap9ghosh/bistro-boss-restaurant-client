import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({items, title, img, content}) => {
   return (
      <div className="mb-20">
         {title && <Cover
            img={img}
            title={title}
            content={content}></Cover>}
         <div className="grid md:grid-cols-2 gap-8 mt-10">
            {
               items.map(item => <MenuItem
                  key={item.key}
                  item={item}
                  content={content}
               ></MenuItem>)
            }
         </div>
         
         <div className="flex justify-center">
            <Link to={`/order/${title}`} className="btn btn-outline border-0 border-b-4 mt-8">ORDER YOUR FAVOURITE FOOD</Link>
         </div>
      </div>
   );
};

export default MenuCategory;