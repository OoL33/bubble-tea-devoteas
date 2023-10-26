import React, { useState } from "react";
import { useUserData } from "./UserDataProvider"; // Import useUserData hook
import UserSettingsForm from "./UserSettingsForm";
import UserProfilePhoto from "./UserProfilePhoto";

const UserProfileSettings = () => {
  const user = useUserData();
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCancelClick = () => {
    setIsEditMode(false);
  };

  if (!user) {
    // Handle the case where user data is not available (e.g., user is not logged in)
    return (
      <div>
        <h1>Profile Settings</h1>
        <p>Loading user data...</p>
      </div>
    );
  }

  if (isEditMode) {
    return (
      <div className="grid-container">
        <div className="grid-x grid-margin-x">
          <div className="grid-container medium-6">
            <h1>Edit Profile</h1>
            <UserSettingsForm onCancel={handleCancelClick} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid-container">
      <div className="grid-x grid-margin-x">
        <div className="grid-container medium-6">
          <h1>Profile Settings</h1>
          <UserProfilePhoto user={user} />
          <p>Name: {user.first_name}</p>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
          <button className="button" onClick={handleEditClick}>
            Edit User Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfileSettings;
