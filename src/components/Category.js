import React, { useContext, memo } from "react";
import Box from "./Box";
import nextKey from "generate-my-key";
import UserContext from "../store/UserContext";

const Category = ({ title, enpointsList }) => {
  const { setUser } = useContext(UserContext);

  return (
    <div className="category flex-column-space">
      <div className="div-category flex-center">{title}</div>
      <div className="api-text">
        <p>
          Here you can find API addresses that the server will respond to as
          well as what should be sent to them in the body of the HTTP request
          and what permissions are required to receive a response from a
          specific API:
        </p>
      </div>
      {enpointsList.map((item) => {
        return <Box key={nextKey()} setUser={setUser} currEndpoint={item} />;
      })}
    </div>
  );
};

export default memo(Category);
