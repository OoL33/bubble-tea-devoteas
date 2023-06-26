import React from "react"
import ShopShowPage from "./ShopShowPage"
import ShopsIndexPage from "./ShopsIndexPage"
import NewShopForm from "./NewShopForm"
import { BrowserRouter as Router, Route, Outlet, Routes } from "react-router-dom"

export const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShopsIndexPage />} />
        <Route path="/shops" element={<ShopsIndexPage />} />
        <Route path="/shops/new" element={<NewShopForm />} />
        <Route path="/shops/:id" element={<ShopShowPage />} />
      </Routes>
    </Router>
  )
}

export default App