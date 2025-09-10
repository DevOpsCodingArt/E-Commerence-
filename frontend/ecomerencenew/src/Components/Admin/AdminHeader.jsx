import React, { useState, useRef, useEffect } from "react";
import {
  HiOutlineMenu,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineCog,
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineChartBar,
} from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="ml-auto w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left side - Menu and Search */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <HiOutlineMenu size={20} />
            </button>

            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              <HiOutlineSearch size={20} />
            </button>
          </div>

          {/* Right side - Icons and Avatar */}
          <div className="flex items-center space-x-2">
            {/* Notification Bell */}
            <button className="relative rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700">
              <HiOutlineBell size={20} />
              <span className="absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-red-500"></span>
            </button>

            {/* Settings */}
            <button className="rounded-md p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700">
              <HiOutlineCog size={20} />
            </button>

            {/* User Avatar */}
            <div className="relative" ref={userMenuRef}>
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="ml-2 rounded-full p-1 transition-colors hover:bg-gray-100"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500">
                  <span className="text-sm font-medium text-white">AG</span>
                </div>
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="fixed top-16 right-4 z-50 w-64 rounded-lg border border-gray-200 bg-white py-2 shadow-lg">
                  {/* User Info */}
                  <div className="border-b border-gray-100 px-4 py-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500">
                        <span className="text-sm font-medium text-white">
                          AG
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Angelina Gotelli
                        </p>
                        <p className="text-xs text-gray-500">
                          admin@opencme.com
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-1">
                    <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
                      <HiOutlineUser className="mr-3 text-gray-400" size={16} />
                      Profile
                    </button>
                    <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
                      <HiOutlineCog className="mr-3 text-gray-400" size={16} />
                      Account Setting
                    </button>
                    <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
                      <HiOutlineChartBar
                        className="mr-3 text-gray-400"
                        size={16}
                      />
                      Activity Log
                    </button>
                    <div className="my-1 border-t border-gray-100"></div>
                    <button className="flex w-full items-center px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-50">
                      <HiOutlineLogout
                        className="mr-3 text-gray-400"
                        size={16}
                      />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Search Bar (appears when search is clicked) */}
        {isSearchOpen && (
          <div className="absolute top-16 right-0 left-0 z-50 bg-white px-4 pb-4">
            <div className="relative max-w-md">
              <HiOutlineSearch
                className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-lg border border-gray-300 py-2 pr-4 pl-10 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu (appears when menu is clicked) */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 left-0 z-50 border-t border-gray-200 bg-white px-4 pt-4 pb-4">
            <nav className="space-y-2">
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Profile
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Settings
              </a>
              <a
                href="#"
                className="block rounded-md px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Help
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
