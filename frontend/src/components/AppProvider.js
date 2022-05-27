import React, { useState } from 'react';

export const AppContext = React.createContext();

export default function AppProvider({children}) {
    const [isAdmin, setIsAdmin] = useState(true);
    const [isUser, setIsUser] = useState(true);

    return (
        <AppContext.Provider 
            value={{
                isUser,
                setIsUser,
                isAdmin,
                setIsAdmin
            }}
        >
        {children}
        </AppContext.Provider>
    )
}