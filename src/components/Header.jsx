import React from 'react';
import { MagnifyingGlassIcon, BellIcon,UserIcon  } from '@heroicons/react/24/outline';

const Header = ({ query, setQuery, handleSearch }) => (
  <nav className="fixed top-0 w-full bg-white shadow-sm z-10">
    <div className="flex items-center justify-between px-4 h-14">
      <div className="flex items-center gap-2">
        <svg viewBox="0 0 24 24" className="h-6 text-red-600">
          <path
            fill="currentColor"
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
          />
        </svg>
        <span className="text-xl font-semibold">MyTube</span>
      </div>

      <form onSubmit={handleSearch} className="flex items-center flex-1 max-w-2xl mx-4">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full"
        >
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-600" />
        </button>
      </form>

      <div className="flex items-center gap-4">
        <BellIcon className="w-6 h-6 text-gray-600" />
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
    <UserIcon className="w-6 h-6 text-white" />
  </div>
      </div>
    </div>
  </nav>
);

export default Header;
