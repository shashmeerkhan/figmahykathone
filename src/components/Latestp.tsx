import React from "react";
import Image from "next/image";
import f1 from "../../public/l1.png";
import f2 from "../../public/l2.png";
import f3 from "../../public/l3.png";
import f4 from "../../public/l4.png";
import f5 from "../../public/l5.png";
import f6 from "../../public/l6.png";
import { StaticImageData } from "next/image";

// Define the data interface
interface Data {
  id: number;
  name: string;
  price1: string;
  price2: string;
  image: StaticImageData; // Use only StaticImageData for consistency
}

// Sample data
const products: Data[] = [
  {
    id: 1,
    name: "Cantilever chair",
    price1: "Y523201",
    price2: "$42.00",
    image: f1,
  },
  {
    id: 2,
    name: "Modern Armchair",
    price1: "A342112",
    price2: "$58.00",
    image: f2,
  },
  {
    id: 3,
    name: "Luxury Sofa",
    price1: "B234344",
    price2: "$120.00",
    image: f3,
  },
  {
    id: 4,
    name: "Elegant Couch",
    price1: "C123456",
    price2: "$250.00",
    image: f4,
  },
  {
    id: 5,
    name: "Office Chair",
    price1: "D654321",
    price2: "$75.00",
    image: f5,
  },
  {
    id: 6,
    name: "Cozy Recliner",
    price1: "E987654",
    price2: "$300.00",
    image: f6,
  },
];

const LatestCardList: React.FC = () => {
  return (
    <>
      <div className="text-bold text-[40px] text-center mb-10">Latest Products</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 mt-10 p-8">
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
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {p.name}
              </h3>
              <p className="text-gray-500 text-sm mb-1">Code: {p.price1}</p>
              <p className="text-black-500  text-lg">{p.price2}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LatestCardList;