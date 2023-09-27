import React, { useState } from "react";
import { useUserData } from "./UserDataProvider"; // Import useUserData hook
import ErrorList from "./ErrorList";
import UserProfilePhoto from "./UserProfilePhoto";

const UserSettingsForm = (props) => {
  const user = useUserData();
  const [formData, setFormData] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    email: user.email,
    newPassword: "",
    confirmPassword: "",
    profilePicture: user.profile_photo.url,
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validForSubmission = () => {
    let submitErrors = {};
    const requiredFields = ["confirmPassword"];
    requiredFields.forEach((field) => {
      if (formData[field].trim() === "") {
        submitErrors = {
          ...submitErrors,
          [field]: "is blank",
        };
      }
    });
    setErrors(submitErrors);
    return _.isEmpty(submitErrors);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform validation on formData
    // If valid, make a PATCH request to update user settings
    if (validForSubmission()) {
      try {
        const response = await fetch(`/api/v1/users/${user.id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user: formData }),
        });
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`;
          throw new Error(errorMessage);
        }
        // Handle success and/or errors
      } catch (error) {
        console.error(`Error in fetch: ${error.message}`);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="page-header">Update Profile</h2>
      <ErrorList errors={errors} />

      {/* Add form fields for firstName, lastName, email, newPassword, confirmPassword, profilePicture */}
      <div className="grid-container form-container">
        <div className="grid-x grid-padding-x">
          <div className="medium-6 cell form-text">
            <UserProfilePhoto />
            <label>
              First Name
              <input
                type="text"
                placeholder="First name"
                name="firstname"
                value={formData.firstname}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="medium-6 cell form-text">
            <label>
              Last Name
              <input
                type="text"
                placeholder="Last name"
                name="lastname"
                value={formData.lastname}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div className="medium-6 cell form-text">
            <label>
              Email
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
        </div>
      </div>
      <div className="medium-6 cell form-text">
        <label>
          New Password
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.newPassword}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div className="medium-6 cell form-text">
        <label>
          Confirm Password
          <input
            type="password"
            placeholder="Confirm password"
            name="password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div className="button-group cell form-text">
        <input className="button" type="submit" value="Save Changes" />
        <button onClick={props.onCancel} className="button">
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UserSettingsForm;
