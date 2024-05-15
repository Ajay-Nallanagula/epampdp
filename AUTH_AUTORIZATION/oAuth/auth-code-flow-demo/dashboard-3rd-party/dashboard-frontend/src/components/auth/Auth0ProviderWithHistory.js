import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH_DOMAIN;
    const audience = process.env.REACT_APP_AUTH_AUDIENCE;
    const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_AUTH_REDIRECT_URI


    const navigate = useNavigate()

    // const onRedirectCallback = (appState) => {
    //     // history.push(appState?.returnTo || window.location.pathname);
    //     navigate(appState.returnTo || window.location.pathname)
    // };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={redirectUri}
            scope="openid profile email"
            audience={audience}
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;

//onRedirectCallback={onRedirectCallback}