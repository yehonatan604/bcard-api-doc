import React, { useContext } from "react";
import UserContext from "../store/UserContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
    let { user } = useContext(UserContext);
    const nav = useNavigate();

    const navHome = () => {
        nav('/');
    }
    const navUsers = () => {
        nav('/users');
    }
    const navCards = () => {
        nav('/cards');
    }
    const navInfo = () => {
        nav('/info');
    }

    return (
        <div className='header bg-deepBlue flex-space'>
            {user.isLoggedIn && <>
                <h2 className='text-hover' onClick={navInfo}>
                    {user.isLoggedIn ? user.email : ''}
                </h2>
            </>}
            <h2 onClick={navHome} className='text-hover'>Home</h2>
            <h2 onClick={navUsers} className='text-hover'>Users</h2>
            <h2 onClick={navCards} className='text-hover'>Cards</h2>
        </div>
    );
}

export default Header;
