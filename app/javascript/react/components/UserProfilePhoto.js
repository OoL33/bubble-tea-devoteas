import React, { useState, useEffect } from "react";

const UserProfilePhoto = ({ user, defaultProfilePhotoUrl }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState(null);

  useEffect(() => {
    // Fetch the user's profile photo URL when the component mounts
    const fetchProfilePhotoUrl = async () => {
      try {
        const response = await fetch(`/api/v1/users/${user.id}/profile_photo`);
        if (response.ok) {
          const contentType = response.headers.get("Content-Type");
          if (contentType && contentType.includes("application/json")) {
            const data = await response.json();
            setProfilePhotoUrl(data.profile_photo_url);
          } else {
            // Handle non-JSON response, set the profile photo URL directly
            setProfilePhotoUrl(response.url);
          }
        } else {
          // Handle non-200 response status, set the default profile photo URL
          setProfilePhotoUrl(defaultProfilePhotoUrl);
        }
      } catch (error) {
        // Handle fetch error, set the default profile photo URL
        console.error(error);
        setProfilePhotoUrl(defaultProfilePhotoUrl);
      }
    };

    fetchProfilePhotoUrl();
  }, [user.id]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("profilePhoto", selectedFile);

      try {
        const response = await fetch(`/api/v1/users/${user.id}/profile_photo`, {
          method: "PATCH",
          body: formData,
        });        
        if (response.status === 200) {
          // Handle a successful upload (e.g., display a success message)
          setUploadStatus("Upload successful!");

          // After a successful upload, fetch the updated profile photo URL
          fetchProfilePhotoUrl();
        }
      } catch (error) {
        // Handle errors (e.g., display an error message)
        setUploadStatus("Upload failed. Please try again.");
      }
    }
  };

  return (
    <div>
      <h2>Profile Photo</h2>
      <img src={profilePhotoUrl} alt="Profile Thumbnail" />

      <form onSubmit={handleFormSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button className="button" type="submit">Upload</button>
      </form>

      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default UserProfilePhoto;
