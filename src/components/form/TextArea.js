import React from "react";
import dtoManager from "../../helpers/dtoManager";

const TextArea = ({ isRequest, data, endpoint, isToken }) => {
    const dto = endpoint ? dtoManager(endpoint.name) : null;
    const requestBox = (
        <div className="flex-center w-100">
            <h3 className="prop-title">Request Body:</h3>
            <textarea
                className="request"
                rows={20}
                cols={80}
                defaultValue={
                    JSON.stringify(
                        dto,
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

    const tokenBox = (
        <div className="flex-center w-100">
            <textarea
                className="token"
                rows={5}
                cols={100}
                defaultValue={
                    JSON.stringify(data, null, 2)
                }
            >
            </textarea>
        </div>
    );

    return (
        isToken ? tokenBox :
            isRequest && dto ? requestBox :
                !isRequest ? resoponseBox :
                    <></>
    );

}

export default TextArea;
