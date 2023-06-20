
const MenuItem = ({item}) => {
   const { name, recipe, image, price } = item;

   return (
      <div className="flex items-center space-x-7">
         <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
         <div>
            <h3 className="uppercase font-semibold">{name} ------------------</h3>
            <p>{recipe}</p>
         </div>
         <p className="text-yellow-600">${price}</p>
      </div>
   );
};

export default MenuItem;