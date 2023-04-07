import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        textColor: "hsl(193, 38%, 86%)",
        adviceDiceColor: "hsl(150, 100%, 66%)",
        adviceCardColor: "hsl(217, 19%, 24%)",
        backgroundColor: "hsl(218, 23%, 16%)"
    }
}

const Theme = ({ children }) => {
    return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
)}

export { Theme }