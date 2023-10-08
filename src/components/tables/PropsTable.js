import React from "react";

const PropsTable = ({ prop }) => {
    return (
        <table className="props-table">
            <thead>
                <tr>
                    <th>type</th>
                    <th>min</th>
                    <th>max</th>
                    <th>required</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {prop.type}
                    </td>
                    <td>
                        {prop.min}
                    </td>
                    <td>
                        {prop.max}
                    </td>
                    <td>
                        {prop.required}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default PropsTable;