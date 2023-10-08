import React from "react";

const ResponsesTable = ({ prop, table }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Response</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>200</td>
                    <td>OK</td>
                    <td>The response contains your requested information.</td>
                </tr>
                <tr>
                    <td>201</td>
                    <td>Created</td>
                    <td>Your request was accepted. The resource was created.</td>
                </tr>
                <tr>
                    <td>202</td>
                    <td>Accepted</td>
                    <td>Your request was accepted. The resource was created or updated.</td>
                </tr>
                <tr>
                    <td>204</td>
                    <td>No Content</td>
                    <td>Your request succeeded, there is no additional information returned.</td>
                </tr>
                <tr>
                    <td>400</td>
                    <td>Bad Request</td>
                    <td>Your request was malformed.</td>
                </tr>
                <tr>
                    <td>401</td>
                    <td>Unauthorized</td>
                    <td>You did not supply valid authentication credentials.</td>
                </tr>
                <tr>
                    <td>403 </td>
                    <td>Forbidden</td>
                    <td>You are not allowed to perform that action.</td>
                </tr>
                <tr>
                    <td>404</td>
                    <td>Not Found</td>
                    <td>No results were found for your request.</td>
                </tr>
                <tr>
                    <td>500</td>
                    <td>Internal Server Error</td>
                    <td>We were unable to perform the request due to server-side problems.</td>
                </tr>

            </tbody>
        </table>
    );
}

export default ResponsesTable;