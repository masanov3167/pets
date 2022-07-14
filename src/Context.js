import React, { useState} from 'react';

const Context = React.createContext();

const TokenProvider = ({ children }) => {

   const [token, setToken] = useState(window.localStorage.getItem('token'));
   if(!window.localStorage.getItem('token') && token){
        window.localStorage.setItem('token', token)
   }
	
	return (
		<Context.Provider value={{token, setToken}}>{children}</Context.Provider>
	);
};

export { Context, TokenProvider };