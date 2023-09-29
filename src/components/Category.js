import React, { useState, useContext } from "react";
import Box from './box/Box';
import nextKey from "generate-my-key"
import UserContext from "../store/UserContext";


const Category = ({ title, enpointsList }) => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const { setUser } = useContext(UserContext);

    const toggleIsCategoryOpen = () => {
        setIsCategoryOpen(!isCategoryOpen)
    }

    return (
        <div className='flex-center'>
            <button
                className="btn btn-category"
                onClick={toggleIsCategoryOpen}
            >
                {title}
            </button>
            {
                isCategoryOpen && enpointsList.map((item) => {
                    return (
                        <Box
                            key={nextKey()}
                            setUser={setUser}
                            currEndpoint={item}
                        />
                    );
                })
            }
        </ div>
    )
}

export default Category;
