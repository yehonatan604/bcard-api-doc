import './Table.css';
import React from "react";

const Table = (props) => {
    return (
        <table className="table">
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
                        {props.prop.type}
                    </td>
                    <td>
                        {props.prop.min}
                    </td>
                    <td>
                        {props.prop.max}
                    </td>
                    <td>
                        {props.prop.required}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;