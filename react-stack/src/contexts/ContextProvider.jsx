import { useContext, useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { },
});

export const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: "Mark"
    });
    const [token, setToken] = useState(null)
    // const [token, setToken] = useState(localStorage.getItem('ACCESS_TOKEN'))
    const _setToken = (token) => {
        setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            _setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)