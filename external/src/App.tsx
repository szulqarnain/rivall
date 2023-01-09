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
import MusicList from './pages/Music/MusicList/MusicList';
import MusicPlay from './pages/Music/MusicPlay/MusicPlay';
import Announcements from './pages/Announcements/Announcements';
import AnnoDetail from './pages/Announcements/Detail/AnnoDetail';
import Analytics from './pages/Analytics/Analytics';
import Security from './pages/Security/Security';
import General from './pages/General/General';
import VideosN from './pages/VideosN/VideosN';
import MusicS from './pages/MusicS/MusicS';
import MusicCategory from './pages/MusicS/MusicCategory';
import VideoDetail from './pages/VideoDetail/VideoDetail';



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

        {/* <Route path="/music-list" element={<MusicList/>} /> */}

        <Route path="/music-play" element={<MusicPlay/>} />

        <Route path="/announcements" element={<Announcements/>} />
        
        <Route path="/announcements-detail" element={<AnnoDetail/>} />


        {/* Videos */}
                
        <Route path="/videos" element={<VideosN/>} />
        <Route path="/video-detail/:id" element={<VideoDetail/>} />

        <Route path="/analytics" element={<Analytics/>} />

        <Route path="/security" element={<Security/>} />

        <Route path="/general" element={<General/>} />

        {/* Music */}
        <Route path="/music" element={<MusicS/>} />
        
        <Route path="/music-list/:id" element={<MusicCategory/>} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;