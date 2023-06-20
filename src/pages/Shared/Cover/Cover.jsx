import { Parallax } from 'react-parallax';

const Cover = ({ img, title, content }) => {
   return (
      <Parallax
         blur={{ min: -15, max: 15 }}
         bgImage={img}
         bgImageAlt="the dog"
         strength={-200}
      >
         <div className="hero h-[450px]">
            <div className="text-center text-neutral-content w-[900px] h-[300px] bg-slate-800 bg-opacity-40 flex justify-center items-center">
               <div>
                  <h1 className="mb-5 text-4xl font-semibold uppercase">{title}</h1>
                  <p className="mb-5 px-20">{content}</p>
               </div>
            </div>
         </div>
      </Parallax>

   );
};

export default Cover;