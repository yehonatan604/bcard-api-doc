import aboutType from "../types/about.type"
import aboutTextTypes from '../enums/table-types.enum'

const aboutList = [
    aboutType(
        'Requests',
        'Communicate with the API by making an HTTP request at the correct endpoint. The chosen method determines the action taken:',
        aboutTextTypes.request
    ),
    aboutType(
        'Response Codes',
        'We use standard HTTP response codes to show the success or failure of requests. Response codes in the 2xx range indicate success, while codes in the 4xx range indicate an error, such as an authorization failure or a malformed request. All 4xx errors will return a JSON response object with an error attribute explaining the error. Codes in the 5xx range indicate a server-side problem preventing BCard from fulfilling your request.',
        aboutTextTypes.response
    ),
    aboutType(
        'Token Decoding',
        'if the user is in the database and the password sent is correct, a token will be returned and the following object can be extracted from it with the help of the jwt-decode library:',
        aboutTextTypes.responseDeode
    ),
];

export default aboutList;
