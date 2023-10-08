import React, { useState } from "react";
import setEndPointProps from "../../helpers/endpointManager";
import Instructions from "./Instructions";
import TextArea from "./TextArea";
import { useContext } from "react";
import UserContext from "../../store/UserContext";
import useApi from "../../hooks/useApi";

const Form = ({ endpoint }) => {
    const [id, setId] = useState('');
    const [data, setData] = useState();
    const { user, setUser } = useContext(UserContext);
    const { sendRequest } = useApi(user, setUser);

    const idChangeHandler = (e) => {
        setId(e.target.value);
    }

    const isPutOrPost = (
        endpoint.method === 'POST' ||
        endpoint.method === 'PUT'
    )

    const formSubmit = (e) => {
        e.preventDefault();
        sendRequest(e, endpoint, id, setData);
    };

    return (
        <form onSubmit={formSubmit}>
            <div className="inner-box flex-start">
                <p>
                    <span className="p-title">Method:</span>
                    {` "${endpoint.method}"`}
                </p>
                <p>
                    <span className="p-title">URL:</span>
                    {` ${endpoint.address + id}`}
                </p>
                {isPutOrPost &&
                    <p className="instruction-request">* In the request body you will need to provide an object with the following keys and values:</p>
                }
                {setEndPointProps(endpoint.object)}
                {endpoint.needId && (
                    <div className="form-control flex-start">
                        <label>id: </label>
                        <input
                            type="text"
                            className="input"
                            onChange={idChangeHandler}
                        />
                    </div>
                )}
                <Instructions endpoint={endpoint} />
                <TextArea
                    isRequest={true}
                    endpoint={endpoint}
                />
                <input
                    type="submit"
                    className="btn submit"
                    value="Try it out"
                />
                <TextArea
                    data={data}
                    isRequest={false}
                    endpoint={endpoint}
                />
            </div>
        </form>
    );
}

export default Form;
