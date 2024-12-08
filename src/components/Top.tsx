import React from "react";
import Image from "next/image";
import f1 from "../../public/top/box for image (1).png";
import f2 from "../../public/top/box for image.png";
import f3 from "../../public/top/image 1171.png";
import f4 from "../../public/top/image 31.png";
import { StaticImageData } from "next/image";

// Define the data interface
interface Data {
  id: number;
  name: string;
  code: string;
  price: string;
  image: StaticImageData; // Use only StaticImageData for consistency
}

// Sample data
const products: Data[] = [
  {
    id: 1,
    name: "Cantilever chair",
    code: "Y523201",
    price: "$42.00",
    image: f1,
  },
  {
    id: 2,
    name: "Modern Armchair",
    code: "A342112",
    price: "$58.00",
    image: f2,
  },
  {
    id: 3,
    name: "Luxury Sofa",
    code: "B234344",
    price: "$120.00",
    image: f3,
  },{
    id: 4,
    name: "Luxury Sofa",
    code: "B234344",
    price: "$120.00",
    image: f4,
  },
];

const Top: React.FC = () => {
  return (<>
    <div className="text-bolder text-[50px] text-center">Top Categories</div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition duration-300"
        >
          {/* Image */}
          <div className="w-full h-64 relative">
            <Image
              src={p.image}
              alt={p.name}
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* Content */}
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-pink-500 mb-2">
              {p.name}
            </h3>
            <p className="text-gray-500 text-sm mb-2">Code - {p.code}</p>
            <p className="text-gray-800 font-bold">{p.price}</p>
          </div>
        </div>
      ))}
    </div>
    </>
    
  );
};

export default Top;
