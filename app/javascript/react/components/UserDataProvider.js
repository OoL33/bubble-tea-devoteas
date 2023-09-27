import React, { createContext, useContext, useState, useEffect } from "react";

const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/v1/check", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });
        if (!response.ok) {
          console.error(
            `HTTP Error: ${response.status} - ${response.statusText}`
          );
          return;
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error("Unexpected response content type:", contentType);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <UserDataContext.Provider value={user}>{children}</UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const user = useContext(UserDataContext);
  return user;
};

export default UserDataProvider;
