import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Challenges = () => {
    const [challengesData, setChallengesData] = useState('none')
    return (
        <div>
            <h3>Challenges</h3>
            <h5>{challengesData}</h5>
        </div>
    );
}

export default Challenges