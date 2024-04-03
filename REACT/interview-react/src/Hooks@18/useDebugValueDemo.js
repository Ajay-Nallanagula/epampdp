import React, { useDebugValue } from 'react';

const useTestDebugValueDemo = (onlineStatus) => {
    useDebugValue(onlineStatus ? 'ONLINE' : 'OFFLINE')
    return "Test For useDebugValue Demo"
}

export default function UseDebugValueDemo(props) {
    const val = useTestDebugValueDemo(true)
    return (
        <div className='App'>
            <h1>Hello React.</h1>
            <h3>{val}</h3>
        </div>
    );
}
