import React from "react";
import Category from "../components/Category";
import CardSEnpointsList from "../data/lists/cards-endpoints.list";

const Cards = () => {
    return (
        <React.Fragment>
            <Category
                title={'Cards'}
                enpointsList={CardSEnpointsList}
            />
        </React.Fragment>
    );
}

export default Cards;
