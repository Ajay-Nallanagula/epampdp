import React from 'react';
import { useHistory, useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const AppStateContext = React.createContext()


const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH_DOMAIN;
    const audience = process.env.REACT_APP_AUTH_AUDIENCE;
    const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;
    const redirectUri = process.env.REACT_APP_AUTH_REDIRECT_URI

    const [authState, setAuthState] = React.useState({});

    axios.interceptors.request.use(
        async config => {
            config.headers.Authorization = `Bearer ${authState.accessToken}`;
            return config;
        },
        error => Promise.reject(error)
    );

    axios.interceptors.response.use(
        response => response,
        error => {
            // Handle the response error case here as your application needs
            return Promise.reject(error);
        }
    );

    //const navigate = useNavigate()

    const onRedirectCallback = (appState) => {
        setAuthState(appState)
        //localstorage.set('AccessToken', appstate.access_token)
        // history.push(appState?.returnTo || window.location.pathname);
        //navigate(appState.returnTo || window.location.pathname)
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={redirectUri}
            scope="openid offline_access profile email"
            audience={audience}
            onRedirectCallback={onRedirectCallback}
        >
            {
                /*
                Why we are using <AppStateContext.Provider/>
                The authState might contain valuable information about the authentication or the user, 
                such as the access token or user profile data. 
                This data might be required by your child components to handle certain functionalities or to render certain elements.

                When you use <AuthContext.Provider value={authState}>,
                 you're providing authState as a context value so that it can be accessed by any nested (child) component that is wrapped inside the AuthContext Consumer or using the useContext(AuthContext) hook to consume the context value.

                */
            }
            <AppStateContext.Provider value={appSTate}>
                {children}
            </AppStateContext.Provider>
        </Auth0Provider>
    );
};

export default Auth0ProviderWithHistory;

//onRedirectCallback={onRedirectCallback}