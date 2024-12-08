import React from "react";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Lorem Ipsum Sit Amet",
    image: "https://readymadeui.com/prediction.webp",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    date: "08 April 2024",
    link: "/blog-post-1",
  },
  {
    id: 2,
    title: "Lorem Ipsum Sit Amet",
    image: "https://readymadeui.com/hacks-watch.webp",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    date: "08 April 2024",
    link: "/blog-post-2",
  },
  {
    id: 3,
    title: "Lorem Ipsum Sit Amet",
    image: "https://readymadeui.com/Imagination.webp",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore...",
    date: "08 April 2024",
    link: "/blog-post-3",
  },
];

export default function Blog() {
  return (
    <div className="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
      <div className="max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded overflow-hidden">
              <Image src={post.image} alt={post.title} className="w-full h-52 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.description}</p>
                <p className="text-pink-500 text-[13px] font-semibold mt-4">{post.date}</p>
                <a href={post.link} className="mt-4 inline-block px-4 py-2 rounded tracking-wider bg-pink-500 hover:bg-pink-600 text-white text-[13px]">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
