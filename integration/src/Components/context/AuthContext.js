import React from 'react';

export default React.createContext({
    token: null,
    name: null,
    username: null,
    email: null,
    secret: null,
    isLoggedIn: null,
    // is password really the best option?
    login: (email, name, secret, password) => {

    },
    logout: () => {

    },
})