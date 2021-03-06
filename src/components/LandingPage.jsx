import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";
function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const LandingPage = () => {
    const { instance } = useMsal();
    return (
        <button onClick={() => handleLogin(instance)}>Sign in</button>
    );
}
