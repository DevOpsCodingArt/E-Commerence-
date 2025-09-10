import React, { useState } from "react";
import {
  HiOutlineViewGrid,
  HiOutlineTemplate,
  HiOutlineUsers,
  HiOutlineCube,
  HiOutlineTag,
  HiOutlineClipboardList,
  HiOutlineLogout,
  HiChevronDown,
  HiChevronUp,
  HiOutlineViewList,
  HiOutlineUpload,
} from "react-icons/hi";
import { GoDotFill } from "react-icons/go";

export default function AdminSideBar() {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (key) => {
    setExpandedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const menuItems = [
    {
      key: "dashboard",
      icon: HiOutlineViewGrid,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      key: "home-slides",
      icon: HiOutlineTemplate,
      label: "Home Slides",
      href: "/home-slides",
      hasDropdown: true,
      isExpanded: expandedItems["home-slides"],
      subItems: [
        {
          key: "home-banners-list",
          icon: GoDotFill,
          label: "Home Banners List",
          href: "/products/list",
        },
        {
          key: "home-banne-slide",
          icon: GoDotFill,
          label: "Add Home Banner Slide",
          href: "/products/upload",
        },
      ],
    },
    {
      key: "users",
      icon: HiOutlineUsers,
      label: "Users",
      href: "/users",
    },
    {
      key: "products",
      icon: HiOutlineCube,
      label: "Products",
      hasDropdown: true,
      isExpanded: expandedItems["products"],
      subItems: [
        {
          key: "product-list",
          icon: HiOutlineViewList,
          label: "Product List",
          href: "/products/list",
        },
        {
          key: "product-upload",
          icon: HiOutlineUpload,
          label: "Product Upload",
          href: "/products/upload",
        },
      ],
    },
    {
      key: "category",
      icon: HiOutlineTag,
      label: "Category",
      href: "/category",
      hasDropdown: true,
      isExpanded: expandedItems["category"],
      subItems: [
        {
          key: "category-list",
          icon: GoDotFill,
          label: "Category List",
          href: "/products/list",
        },
        {
          key: "add-category",
          icon: GoDotFill,
          label: "Add A Category",
          href: "/products/upload",
        },
        {
          key: "sub-category",
          icon: GoDotFill,
          label: "Sub Category List",
          href: "/products/upload",
        },
        {
          key: "add-sub-ategory",
          icon: GoDotFill,
          label: "Add A Sub Category",
          href: "/products/upload",
        },
      ],
    },
    {
      key: "orders",
      icon: HiOutlineClipboardList,
      label: "Orders",
      href: "/orders",
    },
    {
      key: "logout",
      icon: HiOutlineLogout,
      label: "Logout",
      href: "/logout",
    },
  ];

  const renderMenuItem = (item) => {
    const Icon = item.icon;
    const isExpanded = expandedItems[item.key];
    const hasSubItems = item.subItems && item.subItems.length > 0;

    return (
      <div key={item.key} className="mb-1">
        <div
          onClick={() => (hasSubItems ? toggleExpanded(item.key) : null)}
          className={`flex cursor-pointer items-center justify-between px-4 py-3 text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-900 ${
            hasSubItems ? "group" : ""
          }`}
        >
          <div className="flex items-center space-x-3">
            <Icon size={20} className="text-gray-500" />
            <span className="text-sm font-medium">{item.label}</span>
          </div>

          {item.hasDropdown && (
            <div className="flex items-center">
              {hasSubItems ? (
                isExpanded ? (
                  <HiChevronUp size={16} className="text-gray-400" />
                ) : (
                  <HiChevronDown size={16} className="text-gray-400" />
                )
              ) : (
                <HiChevronDown size={16} className="text-gray-400" />
              )}
            </div>
          )}
        </div>

        {/* Submenu items */}
        {hasSubItems && isExpanded && (
          <div className="ml-4 border-l border-gray-200 pl-6">
            {item.subItems.map((subItem) => {
              const SubIcon = subItem.icon;
              return (
                <div
                  key={subItem.key}
                  className="flex cursor-pointer items-center space-x-3 px-4 py-2 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
                >
                  <SubIcon size={16} className="text-gray-400" />
                  <span className="text-sm">{subItem.label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex h-screen w-64 flex-col border-r border-gray-200 bg-white shadow-lg">
      {/* Logo/Brand */}
      <div className="border-b border-gray-200 p-6">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900">
            <span className="text-lg font-bold text-white">E</span>
          </div>
          <h1 className="text-xl font-bold text-gray-900">Ecme</h1>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-2">{menuItems.map(renderMenuItem)}</div>
      </nav>

      {/* Footer or additional content can go here */}
      <div className="border-t border-gray-200 p-4">
        <div className="text-center text-xs text-gray-500">Version 1.0.0</div>
      </div>
    </div>
  );
}
