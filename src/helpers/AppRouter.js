import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Users from "../pages/Users";
import Cards from "../pages/Cards";
import UserInfo from "../pages/UserInfo";

const AppRouter = ({ setUser, logout }) => {
    return (
        <BrowserRouter>
            <Header setUser={setUser} logout={logout} />
            <Routes>
                <Route path='/*' element={<Home />} />
                <Route path='/users' element={<Users />} />
                <Route path='/cards' element={<Cards />} />
                <Route path='/info' element={<UserInfo />} />
            </Routes>
            <Footer />
        </BrowserRouter >
    );
}

export default AppRouter;