import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main"
import './style/style.scss';
import Footer from "./components/Footer/Footer";
import Registration from "./pages/Registration/registration";
import Login from "./pages/Login/login";
import MoviePage from "./pages/MoviePage/moviePage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
      <BrowserRouter>
          <ToastContainer/>
          <Header/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/moviePage" element={<MoviePage/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
