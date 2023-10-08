import React from "react";

const ResponseDecodeTable = () => {
    return (
        <table className="table decode-table">
            <thead>
                <tr>
                    <th>Property</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>_id</td>
                    <td>string</td>
                </tr>
                <tr>
                    <td>isBusiness</td>
                    <td>boolean</td>
                </tr>
                <tr>
                    <td>isAdmin</td>
                    <td>boolean</td>
                </tr>
            </tbody>
        </table>
    );
}

export default ResponseDecodeTable;