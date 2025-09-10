import React from "react";
import {
  AiOutlineEdit,
  AiOutlineSave,
  AiOutlineClose,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineCalendar,
  AiOutlineUser,
  AiOutlineHome,
} from "react-icons/ai";

export default function ProfileSection({
  profileData,
  editData,
  isEditing,
  handleInputChange,
  handleSaveProfile,
  handleCancelEdit,
  setIsEditing,
}) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">My Profile</h2>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
          >
            <AiOutlineEdit className="h-4 w-4" />
            Edit Profile
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={handleSaveProfile}
              type="submit"
              className="flex items-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
            >
              <AiOutlineSave className="h-4 w-4" />
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="flex items-center gap-2 rounded-lg bg-gray-500 px-4 py-2 text-white transition-colors hover:bg-gray-600"
            >
              <AiOutlineClose className="h-4 w-4" />
              Cancel
            </button>
          </div>
        )}
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <AiOutlineUser className="h-5 w-5" />
            Personal Information
          </h3>

          {/* First Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              First Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                placeholder="Enter your first name"
              />
            ) : (
              <p className="rounded-lg bg-gray-50 px-3 py-2 text-gray-800">
                {profileData.firstName}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              Last Name
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                placeholder="Enter your last name"
              />
            ) : (
              <p className="rounded-lg bg-gray-50 px-3 py-2 text-gray-800">
                {profileData.lastName}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              <AiOutlineMail className="mr-1 inline h-4 w-4" />
              Email Address
            </label>
            {isEditing ? (
              <input
                type="email"
                value={editData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                placeholder="Enter your email"
              />
            ) : (
              <p className="rounded-lg bg-gray-50 px-3 py-2 text-gray-800">
                {profileData.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              <AiOutlinePhone className="mr-1 inline h-4 w-4" />
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                value={editData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                placeholder="Enter your phone number"
              />
            ) : (
              <p className="rounded-lg bg-gray-50 px-3 py-2 text-gray-800">
                {profileData.phone}
              </p>
            )}
          </div>

          {/* Date of Birth */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              <AiOutlineCalendar className="mr-1 inline h-4 w-4" />
              Date of Birth
            </label>
            {isEditing ? (
              <input
                type="date"
                value={editData.dateOfBirth}
                onChange={(e) =>
                  handleInputChange("dateOfBirth", e.target.value)
                }
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
              />
            ) : (
              <p className="rounded-lg bg-gray-50 px-3 py-2 text-gray-800">
                {new Date(profileData.dateOfBirth).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>

        {/* Address Information */}
        <div className="space-y-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-700">
            <AiOutlineHome className="h-5 w-5" />
            Address Information
          </h3>

          {/* Address */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              Street Address
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                placeholder="Enter your street address"
              />
            ) : (
              <p className="rounded-lg bg-gray-50 px-3 py-2 text-gray-800">
                {profileData.address}
              </p>
            )}
          </div>

          {/* City */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-600">
              City
            </label>
            {isEditing ? (
              <input
                type="text"
                value={editData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                placeholder="Enter your city"
              />
            ) : (
              <p className="rounded-lg bg-gray-50 px-3 py-2 text-gray-800">
                {profileData.city}
              </p>
            )}
          </div>

          {/* State and Zip Code */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-600">
                State
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                  placeholder="State"
                />
              ) : (
                <p className="rounded-lg bg-gray-50 px-3 py-2 text-gray-800">
                  {profileData.state}
                </p>
              )}
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-600">
                Zip Code
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editData.zipCode}
                  onChange={(e) => handleInputChange("zipCode", e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-red-500 focus:ring-1 focus:ring-red-500 focus:outline-none"
                  placeholder="Zip Code"
                />
              ) : (
                <p className="rounded-lg bg-gray-50 px-3 py-2 text-gray-800">
                  {profileData.zipCode}
                </p>
              )}
            </div>
          </div>

          {/* Account Information */}
          <div className="border-t border-gray-200 pt-4">
            <h4 className="text-md mb-3 font-medium text-gray-700">
              Account Information
            </h4>

            {/* Join Date */}
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-600">
                Member Since
              </label>
              <p className="rounded-lg bg-gray-50 px-3 py-2 text-gray-800">
                {new Date(profileData.joinDate).toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Save Changes Notice */}
      {isEditing && (
        <div className="mt-6 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
          <p className="text-sm text-yellow-800">
            <strong>Note:</strong> Make sure to save your changes before
            navigating away from this page.
          </p>
        </div>
      )}
    </div>
  );
}
