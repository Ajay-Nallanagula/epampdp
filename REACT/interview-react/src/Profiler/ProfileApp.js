
//<Profiler> lets you measure rendering performance of a React tree programmatically.
//Usage
// Measuring rendering performance programmatically
// Measuring different parts of the application

/*
Profiling adds some additional overhead, so it is disabled in the production build by default.
To opt into production profiling, you need to enable a special production build with profiling enabled.

*/

const ProfileApp = () => {
    return (
        <>
            <h2>Profile App Demo</h2>
            <dl>
                <dt>
                    <b>Profiler</b> lets you measure rendering performance of a React tree programmatically.
                    <div>Reference : <a href='https://react.dev/reference/react/Profiler'>Profiler Reference</a></div>
                </dt>
                <dd>
                    <ul>
                        <li>Measuring rendering performance programmatically</li>
                        <li>Measuring different parts of the application</li>
                    </ul>
                </dd>
                <dt>
                    Profiling Caveats
                </dt>
                <dd>
                    Profiling adds some additional overhead, so it is disabled in the production build by default. To opt into production profiling, you need to enable a special production build with profiling enabled.
                </dd>
            </dl>
        </>
    )
}

export default ProfileApp