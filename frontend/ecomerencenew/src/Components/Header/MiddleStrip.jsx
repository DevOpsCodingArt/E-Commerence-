import React, { useEffect, useRef, useState } from "react";
import { BiCart } from "react-icons/bi";
import { TbArrowsRightLeft, TbHeart } from "react-icons/tb";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { IconButton, Tooltip } from "@mui/material";
import CartDrawer from "../Cart/CartDrawer";
import {
  FaClipboardList,
  FaHeart,
  FaSignOutAlt,
  FaUser,
  FaUserCircle,
} from "react-icons/fa";

function MiddelStrip() {
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -4px;
    }
  `;
  return (
    <div className="m-auto mt-3 mb-3 flex justify-between lg:w-[90%]">
      <div className="logo w-[30%]">
        <Link to="/">
          <img src="\logo.jpg" alt="Logo" />
        </Link>
      </div>
      <div className="search flex w-[40%] items-center justify-center gap-2">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search Products Here"
          className="search-input w-full rounded-md border-1 px-4 py-2 text-gray-400 focus:outline-none"
        />
        <button className="btn hidden lg:block">search</button>
      </div>

      <div className="right flex w-[30%] items-center justify-center gap-3">
        <div className="flex gap-1">
          <Link to="/login" className="link">
            Login
          </Link>
          /
          <Link to="/register" className="link">
            Register
          </Link>
        </div>
        <div className="social flex items-center gap-3">
          <Tooltip title="Compare Products" placement="top">
            <IconButton>
              <TbArrowsRightLeft className="link" size={30} />
              <CartBadge badgeContent={2} overlap="circular" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Compare Products" placement="top">
            <IconButton>
              <TbHeart className="link" size={30} />
              <CartBadge badgeContent={2} overlap="circular" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Compare Products" placement="top">
            <IconButton onClick={() => setOpen(true)}>
              <BiCart className="link" size={30} />
              <CartBadge badgeContent={2} overlap="circular" />
            </IconButton>
          </Tooltip>
        </div>

        {/* Profile Icon */}
        <div className="relative" ref={dropdownRef}>
          <div
            className="cursor-pointer"
            onClick={() => setProfileOpen((prev) => !prev)}
          >
            <Tooltip title="Profile" placement="top">
              <IconButton>
                <FaUserCircle
                  size={30}
                  className="text-gray-600 hover:text-red-500"
                />
              </IconButton>
            </Tooltip>
          </div>
          {/* Dropdown */}
          {profileOpen && (
            <div className="absolute top-10 right-0 z-50 w-60 rounded-md border bg-white shadow-xl">
              <div className="border-b px-4 py-3">
                <p className="text-sm font-semibold">Rinku Verma</p>
                <p className="text-xs text-gray-500">
                  rinkuv.planetc@gmail.com
                </p>
              </div>
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <Link
                    to="/account"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <FaUser /> My Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <FaClipboardList /> Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishlist"
                    className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  >
                    <FaHeart /> My List
                  </Link>
                </li>
                <li>
                  <button
                    className="flex w-full items-center gap-2 px-4 py-2 text-left text-red-500 hover:bg-gray-100"
                    onClick={() => alert("Logged out")}
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <CartDrawer open={open} setOpen={setOpen} />
    </div>
  );
}

export default MiddelStrip;
