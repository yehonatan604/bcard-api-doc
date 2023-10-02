import React from "react";

const About = () => {
    return (
        <div className="about flex-center w-100">
            <h2>Welcome!</h2>
            <div className='flex-start'>
                <p>
                    this is API Documentation app of BCard Project,
                    this app allows testing & reviewing of all the api's endpoint.<br />
                    after successful login, the token is saved & added to every request header.
                </p>
            </div>
        </div>
    );
}

export default About;
