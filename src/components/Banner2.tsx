import React from "react";
import Image from "next/image";
import lightlogos from "../../public/lightlogos.png"

const NewsletterSection: React.FC = () => {
  return (
   <>
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center py-16 px-6"
      style={{
        backgroundImage: 'url("/Rectangle 102.png")',
      }}
    >
      <h2 className="text-xl sm:text-3xl text-blue-800 font-bold text-center mb-4">
        Get Latest Update By Subscribe <br /> Our Newsletter
      </h2>
      <button className="bg-pink-500 text-white py-3 px-8 rounded-md hover:bg-pink-600 transition">
        Shop Now
      </button>
    </div>
    <div className="ml-15">
        <Image src={lightlogos} alt="logos"/>
    </div>
   </>
  );
};

export default NewsletterSection;
