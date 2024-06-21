import { useEffect, useState } from "react"
//Step -4: npm i single-spa
import { registerApplication, start } from "single-spa"

//Register MFES using custom hooks
const useRegisterMFES = () => {

    const [statusApp1, setStatusApp1] = useState(false)
    const [statusApp2, setStatusApp2] = useState(false)



    useEffect(() => {
        const landingApp = {
            bootstrap: () => {
                console.log("bootstrap lifecycle stage");
                return Promise.resolve();
            },
            mount: () => {
                //In case you want any additional HTML content in route we can supply it Here 
                // console.log("Mount lifecycle Stage");
                // const root = document.getElementById("root")
                // if (root) {
                //     root.innerHTML =
                //         "<div><h2>****This is Landing Page****</h2></div>";
                // } else {
                //     console.error("NO ROOT CONTAINER FOUND")
                // }
                return Promise.resolve();
            },
            unmount: async () => {
                //  console.log("UnMount lifecycle Stage");
                //document.getElementById("root").innerHTML = "";
                //return Promise.resolve();
            },
            unload: () => {
                console.log("unload lifecycle Stage");
                return Promise.resolve();
            },
        };
        
        registerApplication({
            name: "landing-page",
            app: landingApp,
            activeWhen: ["/"], //(location) => location.pathname.startsWith("/"),
        });

    }, [])

    useEffect(() => {
        registerApplication({
            name: "first-react-app",
            //SystemJs is not there in React context , hence we need to use window/global object
            app: () => window.System.import("http://localhost:8080/firstReactMicroapp-first-example-microapp.js"),
            activeWhen: location => location.pathname === "/app1",
            customProps: {
                cat: "meow",
                dog: "bow-bow",
                appName: "first-react-app",
            }
        });
        setStatusApp1(true)

        //IMPORTANT:****
        //What will happen if we start each microfrontend independently
        //Error: single-spa minified message #43: single-spa: patchHistoryApi() was called after the history api was already patched
        // start({
        //     urlRerouteOnly: true,
        // });

    }, [])

    useEffect(() => {
        registerApplication({
            name: "second-react-microapp",
            app: () => window.System.import("http://localhost:8081/secondMicroapp-second-mfe.js"),
            activeWhen: location => location.pathname.startsWith("/app2"),
            customProps: {
                cat: "meow",
                dog: "bow-bow",
                appName: "second-react-microapp",
            }
        })
        setStatusApp2(true)

        //IMPORTANT:****
        //What will happen if we start each microfrontend independently
        //Error: single-spa minified message #43: single-spa: patchHistoryApi() was called after the history api was already patched

        // start({
        //     urlRerouteOnly: true,
        // });

    }, [])

    useEffect(() => {
        if (statusApp1 && statusApp2) {
            //IMPORTANT:****
            start({
                urlRerouteOnly: true,
            });
        }
    })

    return [statusApp1, statusApp2]
}

export default useRegisterMFES