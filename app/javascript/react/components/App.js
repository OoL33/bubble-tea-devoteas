import ShopShowPage from "./ShopShowPage";
import ShopsIndexPage from "./ShopsIndexPage";
import NewShopForm from "./NewShopForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserDataProvider from "./UserDataProvider";
import UserProfile from "./UserProfile";
import UserProfileSettings from "./UserProfileSettings";

export const App = (props) => {
  return (
    <UserDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ShopsIndexPage />} />
          <Route path="/shops" element={<ShopsIndexPage />} />
          <Route path="/shops/new" element={<NewShopForm />} />
          <Route path="/shops/:id" element={<ShopShowPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/profile/settings" element={<UserProfileSettings />} />
        </Routes>
      </Router>
    </UserDataProvider>
  );
};

export default App;
