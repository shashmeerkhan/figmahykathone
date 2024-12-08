
import React from "react";
import Image from "next/image";
import f1 from "../../../public/pages/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvcGYtczczLXBhaS0xNTgta2FuYXRlLTAxLnBuZw 1.png";
import f2 from "../../../public/pages/drone 1.png";
import f3 from "../../../public/pages/image 1167.png";
import f4 from "../../../public/pages/image 1168 (2).png";
import f5 from "../../../public/pages/image 1173.png";
import f6 from "../../../public/pages/purepng 1.png";
import f7 from "../../../public/pages/unnamed (1) 1.png";
import f8 from "../../../public/pages/unnamed 1.png";
import { StaticImageData } from "next/image";



// Define the data interface
interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  rating: number;
  reviews: number;
  image: StaticImageData;
}



const products: Product[] = [
  {
    id: 1,
    name: "Accumsan Rhoncus",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$120.00",
    rating: 4.5,
    reviews: 50,
    image: f1,
  },
  {
    id: 2,
    name: "In Mollis",
    description: "Massa purus gravida, vel sodales eros.",
    price: "$98.00",
    rating: 4.0,
    reviews: 30,
    image: f2,
  },
  {
    id: 3,
    name: "Vel Eros",
    description: "Ligula ultrices tempor, mattis sodales.",
    price: "$140.00",
    rating: 5.0,
    reviews: 70,
    image: f3,
  },
  {
    id: 4,
    name: "Accumsan Rhoncus",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: "$120.00",
    rating: 4.5,
    reviews: 50,
    image: f4,
  },
  {
    id: 5,
    name: "In Mollis",
    description: "Massa purus gravida, vel sodales eros.",
    price: "$98.00",
    rating: 4.0,
    reviews: 30,
    image: f5,
  },
  {
    id: 6,
    name: "Vel Eros",
    description: "Ligula ultrices tempor, mattis sodales.",
    price: "$140.00",
    rating: 5.0,
    reviews: 70,
    image: f6,
  },

];

const ListView: React.FC = () => {
  return (<>
  
  
  <div className="flex flex-col items-center justify-center bg-cover bg-center py-16 px-6"></div>
    <div className="container mx-auto p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-6 p-2"
        >
          {/* Image Section */}
          <div className="w-full  sm:w-1/4 h-32 sm:h-30 relative">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
             
            />
          </div>

          {/* Content Section */}
          <div className="w-full sm:w-2/3 p-4 flex flex-col justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            </div>

            {/* Price and Rating */}
            <div className="mt-4 flex items-center justify-between">
              <span className="text-pink-500 font-bold">{product.price}</span>
              <div className="flex items-center space-x-1">
                <span className="text-yellow-500">{"⭐".repeat(Math.floor(product.rating))}</span>
                <span className="text-gray-500 text-sm">({product.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </>
  );
};

export default ListView;