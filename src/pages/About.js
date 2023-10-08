import React from "react";
import aboutList from "../data/lists/about.list";
import RequestsTable from "../components/tables/RequestsTable";
import ResponsesTable from "../components/tables/ResponsesTable";
import ResponseDecodeTable from "../components/tables/ResponseDecodeTable";

const About = () => {
    return (
        <React.Fragment>
            {
                aboutList.map((item) => {
                    const table = (
                        item.tableType === 1 ? <RequestsTable /> :
                            item.tableType === 2 ? <ResponsesTable /> :
                                <ResponseDecodeTable />
                    )
                    return (
                        <div className="about flex-center w-100">
                            <h1 className='title'>{item.title}</h1>
                            <div className='flex-start'>
                                <p>{item.text}</p>
                                {table}
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    );
}

export default About;
