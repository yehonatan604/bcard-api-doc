import React from "react";

const RequestsTable = ({ prop, table }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Usage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>GET</td>
                    <td>
                        To retrieve information about a resource,
                        use the GET method.
                        The data is returned as a JSON object.
                        GET methods are read-only and do not affect any resources.
                    </td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>
                        Issue a POST method to create a new object.
                        Include all needed attributes in the request body encoded as JSON.
                    </td>
                </tr>
                <tr>
                    <td>PUT</td>
                    <td>Use the PUT method to update information about a resource.
                        PUT will set new values on the item without regard to their current values.
                    </td>
                </tr>
                <tr>
                    <td>DELETE</td>
                    <td>Use the DELETE method to destroy a resource in your account.
                        If it is not found, the operation will return a 4xx error and an appropriate message.
                    </td>
                </tr>
                <tr>
                    <td>PATCH</td>
                    <td>
                        Some resources support partial modification with PATCH,
                        which modifies specific attributes without updating the entire object representation.
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default RequestsTable;