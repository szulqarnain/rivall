import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Import Components
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Cart from './pages/Store/Cart/Cart';
import Checkout from './pages/Store/Checkout/Checkout';
import Profile from './pages/Profile/Profile';
import SingleProduct from './pages/Store/SingleProduct/SingleProduct';
import Products from './pages/Store/Products/Products';
import NotFound from './pages/NotFound/NotFound';
import VendorProfile from './pages/Store/VendorProfile';



function App() {

  // const body = document.body
  // const darkTheme = "theme-dark"

  // body.classList.add(darkTheme)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<NotFound />} />

        <Route  path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
        <Route path="/profile" element={<Profile/>} />

        <Route path="/store" element={<Products/>} />
        <Route path="/product" element={<SingleProduct/>} />

        <Route path="/product" element={<SingleProduct/>} />

        <Route path="/vendor-list" element={<VendorProfile/>} />

        {/* <Route  path="/notFound" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;