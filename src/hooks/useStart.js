import { useState, useContext } from "react";
import UserContext from "../store/UserContext";
import useApi from "./useApi";
import Header from "../components/Header";
import emptyUser from "../data/emptyUser";

const useStart = () => {
    const [user, setUser] = useState({ ...emptyUser });
    const { login, logout } = useApi(user, setUser);
    let context = useContext(UserContext);

    login();

    context.user = user;
    context.setUser = setUser;

    return <Header setUser={setUser} logout={logout} />;
}

export default useStart;
