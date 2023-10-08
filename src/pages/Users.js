import React from "react";
import Category from "../components/Category";
import UsersEnpointsList from "../data/lists/users-endpoints.list";

const Users = () => {
    return (
        <React.Fragment>
            <Category
                title={'Users'}
                enpointsList={UsersEnpointsList}
            />
        </React.Fragment>
    );
}

export default Users;
