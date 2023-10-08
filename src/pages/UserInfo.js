import React, { useContext, useEffect } from "react";
import UserContext from "../store/UserContext";
import useApi from "../hooks/useApi";
import TextArea from '../components/form/TextArea'
import swal from "../helpers/swalManager";
import emptyUser from "../data/types/emptyUser.type";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
    const { user, setUser } = useContext(UserContext);
    const { logout } = useApi(user, setUser);
    const nav = useNavigate();

    useEffect(() => {
        !user.isLoggedIn &&
            swal('User Info', 'You need to login first!', false)
                .then(() => {
                    nav('/');
                });
    }, [user.isLoggedIn, nav]);

    const onLogout = () => {
        swal('Log-Off', 'Are you sure?', true).then(() => {
            logout();
            setUser({ ...emptyUser });
            nav('/');
        });
    }

    const onGetToken = () => {
        navigator.clipboard.writeText(user.token);
        swal('Token was copied to clipboard successfully!', user.token, false);
    }

    return (
        user.isLoggedIn &&
        <div className="flex-center">
            <h1 className="title main">User Info</h1>
            <div className="info flex-start">
                <p className="bigger">Email: {user.email}</p>
                <p className="bigger">Auth Level: {user.authLevel}</p>
            </div>
            <p className="bigger token-title">Token:</p>
            <TextArea
                data={user.token}
                isToken={true}
            />
            <div className="btns btns-info flex-row-center">
                <btn onClick={onGetToken} className='btn btn-success'>Get Token</btn>
                <btn onClick={onLogout} className='btn btn-success'>Logout</btn>
            </div>
        </div>
    );
}

export default UserInfo;
