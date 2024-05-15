import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import { useEffect, useState } from "react"

const About = () => {
    const auth0 = useAuth0()
    const [metadata, setMetadata] = useState()
    const [accessToken, setAccessToken] = useState()

    useEffect(() => {
        const getUserMetadata = async () => {
            try {
                //This will trigger a call to : https://dev-8mv48kq1hew3c1ei.us.auth0.com/oauth/token
                // const accessToken = await auth0.getAccessTokenSilently({
                //     authorizationParams: {
                //         audience: process.env.REACT_APP_AUTH_AUDIENCE,
                //         scope: "read:current_user"
                //     }
                // })

                const accessToken = await auth0.getAccessTokenWithPopup({
                    authorizationParams: {
                        audience: process.env.REACT_APP_AUTH_AUDIENCE,
                        scope: "read:challenges"
                    }
                })

                const idToken = await auth0.getIdTokenClaims({
                    authorizationParams: {
                        audience: process.env.REACT_APP_AUTH_AUDIENCE,
                        scope: "read:current_user"
                    }
                })
                console.log({ IdToken: idToken.__raw })

                //TODO: this should have been in Challenges Component
                //Call Challenger API here
                const test = await fetch("http://localhost:3001/challenges", {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                const response = await test.json()
                // const userDetailsByIdUrl = `https://${process.env.REACT_APP_AUTH_DOMAIN}/api/v2/users/${auth0.user.sub}`;

                // const metadataResponse = await fetch(userDetailsByIdUrl, {
                //     headers: {
                //         Authorization: `Bearer ${accessToken}`,
                //     },
                // });

                // const { user_metadata } = await metadataResponse.json();

                setMetadata(JSON.stringify(response));
            } catch (error) {
                console.error(error)
            }
        }

        getUserMetadata()

    }, [auth0.getAccessTokenSilently, auth0.user.sub])

    auth0.getAccessTokenSilently()

    return (<div>
        About Page
        {metadata}
    </div>
    )
}


export default withAuthenticationRequired(About, {
    onRedirecting: () => <div>Loading...</div>
})