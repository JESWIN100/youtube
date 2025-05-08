import React from 'react';

const Sidebar = () => (
  <aside className="fixed left-0 w-56 h-full bg-white overflow-y-auto pt-20">
    <div className="p-2">
      <div className="py-2">
        {['Home', 'Shorts', 'Subscriptions'].map((item) => (
          <a key={item} href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
            {item}
          </a>
        ))}
      </div>
      <div className="py-4 border-t">
        <h3 className="px-3 py-2 text-sm font-semibold text-gray-500">You</h3>
        {['History', 'Playlists', 'Your videos', 'Watch Later', 'Liked videos'].map((item) => (
          <a key={item} href="#" className="flex items-center px-3 py-2 rounded-lg hover:bg-gray-100">
            {item}
          </a>
        ))}
      </div>
    </div>
  </aside>
);

export default Sidebar;
