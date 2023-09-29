import nextKey from "generate-my-key"

const Instructions = ({ endpoint }) => {

    let instructions = [];

    const adminInstruction = <li key={nextKey()}><p>You need to be Admin to get an answer from this api</p></li>;
    const bizInstruction = <li key={nextKey()}><p>You will need to be a Business type user to get an answer from this api</p></li>;
    const tokenInstruction = <li key={nextKey()}><p>You will need to provide a token to get an answer from this api</p></li>;
    const imageInstruction = <li key={nextKey()}><p>"image/url" must be a standard URL</p></li>;
    const passwordInstruction = <li key={nextKey()}><p>"password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-</p></li>;
    const phoneInstruction = <li key={nextKey()}><p>"phone" must be a standard Israeli phone number</p></li>;
    const emailInstruction = <li key={nextKey()}><p>"email" must be a standard email</p></li>;
    const webInstruction = <li key={nextKey()}><p>"web" must be a standard URL</p></li>;
    const registeredInstruction = <li key={nextKey()}><p>You will need to be the registered user or Admin type user to get an answer from this api</p></li>;


    if (endpoint.name === 'Register') {
        instructions = [
            passwordInstruction,
            phoneInstruction,
            emailInstruction,
            imageInstruction
        ];
    }

    if (endpoint.name === 'Get all my Cards'
        || endpoint.name === 'Like a Card'
    ) {
        instructions = [
            tokenInstruction,
            registeredInstruction
        ]
    }
    if (endpoint.name === 'Update User') {
        instructions = [
            passwordInstruction,
            phoneInstruction,
            emailInstruction,
            imageInstruction,
            tokenInstruction,
            registeredInstruction
        ];
    }
    if (endpoint.name === 'Delete User' ||
        endpoint.name === 'Delete Card' ||
        endpoint.name === "Patch User's Business Status" ||
        endpoint.name === "Patch Cards's Business Number" ||
        endpoint.name === "Get All Users"
    ) {
        instructions = [
            tokenInstruction,
            adminInstruction
        ];
    }
    if (endpoint.name === 'Create new Card' ||
        endpoint.name === 'Update Card'
    ) {
        instructions = [
            passwordInstruction,
            phoneInstruction,
            emailInstruction,
            imageInstruction,
            webInstruction,
            tokenInstruction,
            bizInstruction
        ];
    }
    if (endpoint.name === 'Login') {
        instructions = [
            emailInstruction,
            passwordInstruction
        ];
    }

    return (
        <div className="box-instructions">
            <ul>
                {instructions}
            </ul>
        </div>
    );
}

export default Instructions;
