import setEndPointType from "../types/endpoint.type";
import BASE_URL from "../../helpers/baseApiUrl";

const CardSEnpointsList = [
    // get all cards
    {
        api: 'Cards',
        name: 'Get all Cards',
        method: 'GET',
        address: BASE_URL + 'cards',
        needId: false,
        authRequire: 'None'
    },

    // get Card By ID
    {
        api: 'Cards',
        name: 'Get Card By ID',
        method: 'GET',
        address: BASE_URL + 'cards/',
        needId: true,
        authRequire: 'None'
    },

    // get all My Cards
    {
        api: 'Cards',
        name: 'Get all my Cards',
        method: 'GET',
        address: BASE_URL + 'cards/my-cards',
        needId: false,
        authRequire: 'Biz'
    },

    // Create Card
    {
        api: 'Cards',
        name: 'Create new Card',
        method: 'POST',
        address: BASE_URL + 'cards',
        needId: false,
        authRequire: 'Biz',

        object: {
            title: setEndPointType('string', 2, 256, 'true'),
            subtitle: setEndPointType('string', 2, 256, 'true'),
            description: setEndPointType('string', 2, 1024, 'true'),
            phone: setEndPointType('string', 9, 11, 'true'),
            email: setEndPointType('string', 5, 256, 'true'),
            web: setEndPointType('string', 14, Infinity, 'false'),
            image: {
                url: setEndPointType('string', 14, Infinity, 'false'),
                alt: setEndPointType('string', 2, 256, 'false')
            },
            address: {
                state: setEndPointType('string', 2, 256, 'false'),
                country: setEndPointType('string', 2, 256, 'true'),
                city: setEndPointType('string', 2, 256, 'true'),
                street: setEndPointType('string', 2, 256, 'true'),
                houseNumber: setEndPointType('number', 2, 256, 'true'),
                zip: setEndPointType('number', 2, 256, 'false')
            }
        }
    },

    // Update Card
    {
        api: 'Cards',
        name: 'Update Card',
        method: 'PUT',
        address: BASE_URL + 'cards/',
        needId: true,
        authRequire: 'Biz',

        object: {
            title: setEndPointType('string', 2, 256, 'true'),
            subtitle: setEndPointType('string', 2, 256, 'true'),
            description: setEndPointType('string', 2, 1024, 'true'),
            phone: setEndPointType('string', 9, 11, 'true'),
            email: setEndPointType('string', 5, 256, 'true'),
            web: setEndPointType('string', 14, Infinity, 'false'),
            image: {
                url: setEndPointType('string', 14, Infinity, 'false'),
                alt: setEndPointType('string', 2, 256, 'false')
            },
            address: {
                state: setEndPointType('string', 2, 256, 'false'),
                country: setEndPointType('string', 2, 256, 'true'),
                city: setEndPointType('string', 2, 256, 'true'),
                street: setEndPointType('string', 2, 256, 'true'),
                houseNumber: setEndPointType('number', 2, 256, 'true'),
                zip: setEndPointType('number', 2, 256, 'false')
            }
        }
    },

    // Like a Card
    {
        api: 'Cards',
        name: 'Like a Card',
        method: 'PATCH',
        address: BASE_URL + 'cards/',
        needId: true,
        authRequire: 'User'
    },

    // Patch Cards's Business Number
    {
        api: 'Cards',
        name: "Patch Cards's Business Number",
        method: 'PATCH',
        address: BASE_URL + 'cards/{id}',
        needId: true,
        authRequire: 'Admin',

        object: {
            bizNumber: setEndPointType('number', 7, 7, 'true')
        }
    },

    // Delete a Card
    {
        api: 'Cards',
        name: 'Delete a Card',
        method: 'DELETE',
        address: BASE_URL + 'cards/',
        needId: true,
        authRequire: 'Biz'
    }
];

export default CardSEnpointsList;
