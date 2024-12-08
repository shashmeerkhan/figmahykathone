"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-purple-600 text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center py-2 px-4 text-sm">
        <div>
          <span className="mr-4">📧 nhhaonui@gmail.com</span>
          <span>📞 (123) 456 7890</span>
        </div>
        <div className="hidden sm:flex space-x-4">
          <span>English</span>
          <span>USD</span>
          <span>Login</span>
          <span>Wishlist ♥</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white text-black py-4 px-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <h1 className="text-3xl font-bold text-purple-600">Hekto</h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link href="/" className="hover:text-purple-600">
            Home
          </Link>
          <div className="relative group">
            <Link href="/" className="hover:text-purple-600">
              Pages
            </Link>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white text-black shadow-md mt-1 w-32">
              <Link
                href="/pages"
                className="block px-4 py-2 hover:bg-purple-100 transition"
              >
                Page 1
              </Link>
              <Link
                href="/pages2"
                className="block px-4 py-2 hover:bg-purple-100 transition"
              >
                Page 2
              </Link>
            </div>
          </div>
          <Link href="/products" className="hover:text-purple-600">
            Products
          </Link>
          <Link href="/blog" className="hover:text-purple-600">
            Blog
          </Link>
          <Link href="/shop" className="hover:text-purple-600">
            Shop
          </Link>
          <Link href="/contact" className="hover:text-purple-600">
            Contact
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="hidden md:flex items-center border rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 focus:outline-none"
          />
          <button className="bg-pink-500 text-white px-4">🔍</button>
        </div>

        {/* Mobile Menu Button */}
        <div className="block md:hidden">
          <button
            className="text-2xl text-purple-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-black py-4 px-4 shadow-md">
          <Link href="/" className="block py-2 hover:text-purple-600">
            Home
          </Link>
          <div className="relative">
            <Link href="/pages" className="block py-2 hover:text-purple-600">
              Pages
            </Link>
            <div className="ml-4">
              <Link href="/pages" className="block py-2 hover:text-purple-600">
                Page 1
              </Link>
              <Link href="/pages2" className="block py-2 hover:text-purple-600">
                Page 2
              </Link>
            </div>
          </div>
          <Link href="/product" className="block py-2 hover:text-purple-600">
            Products
          </Link>
          <Link href="/blog" className="block py-2 hover:text-purple-600">
            Blog
          </Link>
          <Link href="/shop" className="block py-2 hover:text-purple-600">
            Shop
          </Link>
          <Link href="/contact" className="block py-2 hover:text-purple-600">
            Contact
          </Link>

          {/* Mobile Search Bar */}
          <div className="mt-4 border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search"
              className="px-4 py-2 w-full focus:outline-none"
            />
            <button className="bg-pink-500 text-white w-full py-2">🔍</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
