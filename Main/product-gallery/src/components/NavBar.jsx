import React from 'react';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center gap-4">
          {/* Logo / Brand */}
          <div className="shrink-0 flex items-center">
            <span className="font-extrabold text-2xl text-indigo-600 tracking-tight">Gallery.</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex space-x-6 items-center justify-center flex-1">
            <a
              href="#"
              className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-semibold transition-colors">
              HOME
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              PRODUCTS
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              ABOUT
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors">
              CONTACT
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
