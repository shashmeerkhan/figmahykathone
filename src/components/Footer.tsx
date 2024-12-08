import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Subscription */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Hekto</h2>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
              />
              <button className="mt-2 w-full bg-pink-500 text-white py-2 rounded-md">
                Sign Up
              </button>
            </div>
            <div className="text-sm">
              <p>Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Categories</h3>
            <ul className="space-y-2">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Customer Care</h3>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Pages</h3>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-sm border-t pt-4">
          <p>©Webecy - All Rights Reserved</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-900">Facebook</a>
            <a href="#" className="hover:text-gray-900">Instagram</a>
            <a href="#" className="hover:text-gray-900">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;