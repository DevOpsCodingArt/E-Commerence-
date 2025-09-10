import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineLogout,
} from "react-icons/ai";

// Component imports
import Sidebar from "./Sidebar";
import ProfileSection from "./ProfileSection";
import OrdersSection from "./OrdersSection";
import WishlistSection from "./WishlistSection";
import LogoutModal from "./LogoutModal";

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    dateOfBirth: "1990-01-15",
    joinDate: "2022-03-15",
  });

  const [editData, setEditData] = useState({ ...profileData });

  const orders = [
    {
      id: "ORD-2024-001",
      date: "2024-01-15",
      status: "delivered",
      total: 127.97,
      items: [
        {
          name: "Wireless Bluetooth Headphones",
          price: 89.99,
          quantity: 1,
          image: "🎧",
        },
        { name: "Smartphone Case", price: 24.99, quantity: 1, image: "📱" },
        { name: "USB-C Cable", price: 12.99, quantity: 1, image: "🔌" },
      ],
    },
    {
      id: "ORD-2024-002",
      date: "2024-01-22",
      status: "processing",
      total: 299.99,
      items: [
        { name: "Laptop Stand", price: 79.99, quantity: 1, image: "💻" },
        { name: "Wireless Mouse", price: 49.99, quantity: 1, image: "🖱️" },
        { name: "Keyboard", price: 169.99, quantity: 1, image: "⌨️" },
      ],
    },
  ];

  const [wishlist, setWishlist] = useState([
    { id: 1, name: "4K Webcam", price: 129.99, image: "📹", inStock: true },
    { id: 2, name: "Gaming Chair", price: 299.99, image: "🪑", inStock: true },
    {
      id: 3,
      name: "Mechanical Keyboard",
      price: 159.99,
      image: "⌨️",
      inStock: false,
    },
  ]);

  const sidebarItems = [
    { id: "profile", label: "My Profile", icon: AiOutlineUser },
    { id: "orders", label: "Orders", icon: AiOutlineShoppingCart },
    { id: "wishlist", label: "My List", icon: AiOutlineHeart },
    { id: "logout", label: "Logout", icon: AiOutlineLogout },
  ];

  // Profile Handlers
  const handleInputChange = (field, value) => {
    setEditData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveProfile = () => {
    setProfileData({ ...editData });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditData({ ...profileData });
    setIsEditing(false);
  };

  const handleTabClick = (tabId) => {
    if (tabId === "logout") {
      setShowLogoutModal(true);
    } else {
      setActiveTab(tabId);
    }
  };

  const handleLogout = () => {
    console.log("Logging out...");
    setShowLogoutModal(false);
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Main section render
  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <ProfileSection
            profileData={profileData}
            editData={editData}
            isEditing={isEditing}
            handleInputChange={handleInputChange}
            handleSaveProfile={handleSaveProfile}
            handleCancelEdit={handleCancelEdit}
            setIsEditing={setIsEditing}
          />
        );
      case "orders":
        return <OrdersSection orders={orders} />;
      case "wishlist":
        return (
          <WishlistSection
            wishlist={wishlist}
            removeFromWishlist={removeFromWishlist}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Sidebar
              sidebarItems={sidebarItems}
              activeTab={activeTab}
              handleTabClick={handleTabClick}
              profileData={profileData}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <LogoutModal
          onClose={() => setShowLogoutModal(false)}
          onConfirm={handleLogout}
        />
      )}
    </div>
  );
}
