import React from "react";
import dtoManager from "../../helpers/dtoManager";

const TextArea = ({ isRequest, data, endpoint }) => {
    let textBox = isRequest ? (
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
    ) : (
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
    )

    if (dtoManager(endpoint.name) === null) {
        return <></>
    }

    return textBox;
}

export default TextArea;
