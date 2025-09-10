import React from "react";

export default function Sidebar({
  sidebarItems,
  activeTab,
  handleTabClick,
  profileData,
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500">
          <i className="text-lg text-white">{profileData.firstName[0]}</i>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">
            {profileData.firstName} {profileData.lastName}
          </h3>
          <p className="text-sm text-gray-600">{profileData.email}</p>
        </div>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition-colors ${
                activeTab === item.id
                  ? "border-l-4 border-red-600 bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
