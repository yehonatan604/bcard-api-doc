import jwt_decode from "jwt-decode";

const decoder = (token) => {
    return jwt_decode(token);
}

export default decoder;
