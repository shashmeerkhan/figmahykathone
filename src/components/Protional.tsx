import React from "react";
import pro1 from "../../public/pro1.png"
import pro2 from "../../public/pro2.png"
import Image from "next/image";

const PromotionalBanner: React.FC = () => {
  return (<>

    <div className="flex flex-wrap  bg-purple-50 p-1 rounded-lg">
    <Image src={pro1} alt="lamp"  className="h-48 p-5"/>
      {/* Text Content */}
      <div className="max-w-md text-centre mt-[120px] ">
        <h4 className="text-pink-500 font-semibold m-2 ">
          Best Furniture For Your Castle....
        </h4>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          New Furniture Collection Trends in 2020
        </h1>
        <p className="text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <button className="bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600 transition">
          Shop Now
        </button>
      </div>

      {/* Image Content */}
      <div className="relative flex items-center">
        <Image src={pro2} alt="lamp"/>
        {/* Chair Image */}
        
         

       
      </div>
    </div>
    </>
  );
};

export default PromotionalBanner;