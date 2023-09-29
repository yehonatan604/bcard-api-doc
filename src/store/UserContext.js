import React from "react"

const UserContext = React.createContext({
    user: {
        email: '',
        isLoggedIn: false,
        authLevel: 'Guest',
        token: ''
    },
    setUser: () => { }
});


export default UserContext;