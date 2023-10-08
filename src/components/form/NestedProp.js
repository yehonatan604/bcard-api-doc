import React from "react";
import PropsTable from "../tables/PropsTable";
import nextKey from "generate-my-key"

const NestedProp = ({ prop, title }) => {
    let nestedProps = [];

    for (let element in prop) {
        nestedProps.push
            (
                <div className="w-100 nested-prop" key={nextKey()}>
                    <h3 className="prop-title">{element}:</h3>
                    <PropsTable prop={prop[element]} />
                </ div>
            );
    }
    return (
        <div>
            <h2 className="prop-title">{title}:</h2>
            {nestedProps}
            <hr />
        </div>
    )
}

export default NestedProp;
