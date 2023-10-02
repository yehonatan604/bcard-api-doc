import React, { useContext } from "react";
import UserContext from "../store/UserContext";
import emptyUser from '../data/emptyUser'

const Header = ({ setUser, logout }) => {
    let { user } = useContext(UserContext);
    const goToHackerU = () => {
        window.open('https://www.hackeru.co.il/', '_blank').focus();
    }
    const onLogout = () => {
        logout();
        setUser({ ...emptyUser });
    }
    return (
        <div className='header bg-deepBlue flex-row-center w-100'>
            <img onClick={goToHackerU} className='img' src={'https://www.hackeru.co.il/img/logo.svg'} alt={'profile'} />
            {user.isLoggedIn && <>
                <h2 className='logoff' onClick={(e) => onLogout(e)}>
                    {user.isLoggedIn ? 'Log-Off' : ''}
                </h2>
                <h2>email: {user.email}</h2>
                <h2>authLevel: {user.authLevel}</h2>
                <h4 id="stamp">BCard API Documentation v1.0</h4>
            </>}
        </div>
    );
}

export default Header;
