import React from "react";
import dtoManager from "../../helpers/dtoManager";

const TextArea = ({ isRequest, data, endpoint }) => {
    const requestBox = (
        <div className="flex-center w-100">
            <h3 className="prop-title">Request Body:</h3>
            <textarea
                className="request"
                rows={20}
                cols={80}
                defaultValue={
                    JSON.stringify(
                        dtoManager(endpoint.name),
                        null,
                        2
                    )
                }
            >
            </textarea>
        </ div>
    );

    const resoponseBox = (
        <div className="flex-center w-100">
            <h3>Response:</h3>
            <textarea
                className="response"
                rows={10}
                cols={100}
                defaultValue={
                    JSON.stringify(data, null, 2)
                }
            >
            </textarea>
        </div>
    );

    return isRequest && dtoManager(endpoint.name) ?
        requestBox : !isRequest ? resoponseBox : <></>;

}

export default TextArea;
