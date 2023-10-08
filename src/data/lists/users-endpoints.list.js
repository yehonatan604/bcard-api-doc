import setEndPointType from "../types/endpoint.type";
import BASE_URL from "../../helpers/baseApiUrl";

const UsersEnpointsList = [
  // register
  {
    api: '/users',
    name: 'Register',
    method: 'POST',
    address: BASE_URL + 'users',
    needId: false,
    authRequire: 'None',

    object: {
      name: {
        first: setEndPointType('string', 2, 256, 'true'),
        middle: setEndPointType('string', 2, 256, 'false'),
        last: setEndPointType('string', 2, 256, 'true')
      },
      phone: setEndPointType('string', 9, 11, 'true'),
      email: setEndPointType('string', 5, Infinity, 'true'),
      password: setEndPointType('string', 7, 20, 'true'),
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
        zip: setEndPointType('number', 2, 256, 'false'),
      },
      isBusiness: setEndPointType('boolean', 0, 1, 'true')
    }
  },

  // login
  {
    api: '/users/login',
    name: 'Login',
    method: 'POST',
    address: BASE_URL + 'users/login',
    needId: false,
    authRequire: 'None',

    object: {
      email: setEndPointType('string', 5, Infinity, 'true'),
      password: setEndPointType('string', 7, 20, 'true'),
    }
  },

  // Get All Users
  {
    api: '/users',
    name: 'Get All Users',
    method: 'GET',
    address: BASE_URL + 'users',
    needId: false,
    authRequire: 'Admin'
  },

  // Get User By ID
  {
    api: '/users/',
    name: 'Get User By ID',
    method: 'GET',
    address: BASE_URL + 'users/',
    needId: true,
    authRequire: 'User'
  },

  // Update User
  {
    api: '/users/',
    name: 'Update User',
    method: 'PUT',
    address: BASE_URL + 'users/',
    needId: true,
    authRequire: 'User',

    object: {
      name: {
        first: setEndPointType('string', 2, 256, 'true'),
        middle: setEndPointType('string', 2, 256, 'false'),
        last: setEndPointType('string', 2, 256, 'true')
      },
      phone: setEndPointType('string', 9, 11, 'true'),
      email: setEndPointType('string', 5, Infinity, 'true'),
      password: setEndPointType('string', 7, 20, 'true'),
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
        zip: setEndPointType('number', 2, 256, 'false'),
      },
      isBusiness: setEndPointType('boolean', 0, 1, 'true')
    }
  },

  // Delete User
  {
    api: '/users/',
    name: 'Delete User',
    method: 'DELETE',
    address: BASE_URL + 'users/',
    needId: true,
    authRequire: 'Admin'
  },

  // Patch User's Business Status
  {
    api: '/users/',
    name: "Patch User's Business Status",
    method: 'PATCH',
    address: BASE_URL + 'users/',
    needId: true,
    authRequire: 'Admin'
  }
];

export default UsersEnpointsList;