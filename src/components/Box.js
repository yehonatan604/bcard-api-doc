import React, { useState, useContext } from "react";
import Form from "./form/Form";
import UserContext from "../store/UserContext";

const Box = ({ currEndpoint }) => {
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const { user } = useContext(UserContext);
    const endpoint = currEndpoint;

    const boxToggle = (e) => {
        e.target.innerText = isBoxOpen ? '+' : '-'
        setIsBoxOpen(!isBoxOpen);
    }

    const isAdmin = user.authLevel === 'Admin';

    let lock;
    if (isAdmin || user.authLevel === endpoint.authRequire || endpoint.authRequire === 'None') {
        lock = <p className="lock">&#128275;</p>;
    }
    else {
        lock = <p className="lock">&#128274;</p>;
    }

    return (
        <div className="box flex-center">
            <div className="box-title flex-space">
                <div className="flex-row">
                    <button className="btn" onClick={boxToggle}>+</button>
                    <h3>{endpoint.name}</h3>
                </div>
                <div className="flex-row">
                    {lock}
                </div>
            </div>
            {isBoxOpen && <Form endpoint={endpoint} />}
        </div>
    );
}

export default Box;
