import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// Import Components
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;