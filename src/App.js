import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import UserDetailsPage from "./components/User/UserDetailsPage";

export default function App() {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/user/:login' element={<UserDetailsPage />} />
        <Route path='about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}
