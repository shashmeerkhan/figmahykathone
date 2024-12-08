import React from "react";
import Image from "next/image";
import chairImage from "../../public/Home-Stylish-Club-Sofa-Chair-Pleated-Sofa-Armchair-with-Golden-Legs 1.png";

const Banner: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 bg-purple-50 p-8 rounded-lg">
      {/* Image Section */}
      <div className="relative">
        <div className="absolute bg-pink-100 w-80 h-80 rounded-full -z-10 -top-6 -left-6"></div>
        <Image
          src={chairImage}
          alt="Blue Chair"
          className="rounded-lg"
          width={300}
          height={300}
        />
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left">
        <h1 className="text-2xl lg:text-4xl font-bold text-blue-800 mb-4">
          Unique Features Of Latest & Trending Products
        </h1>
        <ul className="mb-6 space-y-4">
          <li className="flex items-center text-gray-600">
            <span className="w-4 h-4 bg-pink-500 rounded-full mr-4"></span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="flex items-center text-gray-600">
            <span className="w-4 h-4 bg-blue-500 rounded-full mr-4"></span>
            Reinforced with double wood dowels, glue, screws, and nails
          </li>
          <li className="flex items-center text-gray-600">
            <span className="w-4 h-4 bg-green-500 rounded-full mr-4"></span>
            Arms, backs, and seats are structurally reinforced
          </li>
        </ul>
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <button className="bg-pink-500 text-white py-3 px-8 rounded-md hover:bg-pink-600 transition">
            Add To Cart
          </button>
          <div className="mt-4 lg:mt-0 lg:ml-6">
            <h2 className="font-bold text-blue-800">B&B Italian Sofa</h2>
            <p className="text-gray-600">$32.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;