import React from 'react'

export default React.createContext({
    token: null,
    session: null,
    userInfo: null,
    login: () => {},
    logout: () => {},
    setUserInfo: () => {} 
})