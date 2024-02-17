"use client";

import { createContext, useEffect } from "react";
import { useState } from "react";

export const ThemeContext = createContext();

// Nextjs uses server side rendering
// Fetches the default theme of the website from the local storage
const getFromLocalStorage = () =>{
    if(typeof window !== "undefined")
    {
        const value = localStorage.getItem("theme");
        return value || "light"
    }
};

export const ThemeContextProvider = ({ children }) => {

    // State for the current theme (light or dark)
    // the initial value of theme is 'light' here
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage()
    });

    const toggle = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
};