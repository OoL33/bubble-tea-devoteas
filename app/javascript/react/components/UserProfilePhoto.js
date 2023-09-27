import React, { useState } from "react";

const UserProfilePhoto = ({ user }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

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
        const response = await fetch("api/v1/profile_photos", {
          method: "POST",
          body: formData,
        });

        if (response.status === 200) {
          // Handle a successful upload (e.g., display a success message)
          setUploadStatus("Upload successful!");
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
      <img src={user.profile_photo.url} alt="Profile" />
      <img src={user.profile_photo.thumb} />

      <form onSubmit={handleFormSubmit}>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>

      {uploadStatus && <p>{uploadStatus}</p>}
    </div>
  );
};

export default UserProfilePhoto;
