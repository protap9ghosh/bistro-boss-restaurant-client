import React from 'react';
import { Helmet } from 'react-helmet-async';

const Secret = () => {
   return (
      <div>
         <Helmet>
            <title>Secret | Bistro Boss</title>
         </Helmet>

         <h2 className='text-3xl font-bold'>This is Secret Route</h2>
      </div>
   );
};

export default Secret;