import React from "react";
import About from "./About";

const Home = () => {
    return (
        <>
            <div className="about flex-column-space w-100">
                <div className="flex-center">
                    <h1 className="title main">BCard API V1.0</h1>
                    <div className='flex-start'>
                        <p>
                            BCard API v1 is a set of HTTP endpoints that adhere to RESTful design principles and CRUD actions with predictable URIs. It uses standard HTTP response codes, authentication, and verbs. The API has consistent and well-formed JSON requests and responses with cursor-based pagination to simplify list handling. Error messages are descriptive and easy to understand. All functions of the Vultr customer portal are accessible via the API, enabling you to script complex unattended scenarios with any tool fluent in HTTP.
                        </p>
                    </div>
                </div>
            </div>
            <About />
        </>
    );
}

export default Home;