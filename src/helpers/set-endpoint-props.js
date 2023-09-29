import Table from "../components/table/Table";
import NestedProp from "../components/form/NestedProp";
import nextKey from "generate-my-key"

const setEndPointProps = (obj) => {
    let arr = [];
    for (let prop in obj) {

        const currentProp = obj[prop];

        if (prop === 'name' || prop === 'image' || prop === 'address') {
            arr.push(
                <NestedProp
                    key={nextKey()}
                    prop={currentProp}
                    title={prop}
                />
            );
        }
        else {
            arr.push(
                <div key={nextKey()}>
                    <h2 className="prop-title">{prop}:</h2>
                    <Table
                        prop={currentProp}
                    />
                    <hr />
                </div>
            );
        }
    }
    return arr;
}

export default setEndPointProps;
