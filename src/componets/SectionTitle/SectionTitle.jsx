
const SectionTitle = ({heading, subHeading}) => {
   return (
      <div className="text-center">
         <p className="text-yellow-600 italic mb-3">--- {subHeading} ---</p>
         <hr className="w-96 mx-auto border-[1px]"/>
         <h3 className="text-3xl py-3 uppercase">{heading}</h3>
         <hr className="w-96 mx-auto border-[1px]" />
      </div>
   );
};

export default SectionTitle;