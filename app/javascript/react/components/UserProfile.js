import React from "react";
import { useUserData } from "./UserDataProvider";
import { FaGear } from "react-icons/fa6";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const user = useUserData();

  if (!user) {
    return (
      <div>
        <h1>User Profile</h1>
        <p>Welcome, Guest!</p>
      </div>
    );
  }

  return (
    <div className="callout review-box">
      <ul className="vertical menu">
        <h2>User Profile</h2>
        <p>Welcome, {user.first_name}!</p>
        <div className="button small">
          <Link to="/profile/settings">
            {/* <div className="button"> */}
            <FaGear />
            Settings
            {/* </div> */}
          </Link>
        </div>
      </ul>
    </div>
  );
};

export default UserProfile;
