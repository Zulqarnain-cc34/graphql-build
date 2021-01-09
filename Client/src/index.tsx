import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
    Provider,
    createClient,
    dedupExchange,
    fetchExchange,
    ssrExchange,
} from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { cacheUpdates } from "./cache";
import { StateProvider } from "./context/stateProvider";

const serverSideRendering = async () => {
    const ssr = ssrExchange({ isClient: false });
    const client = createClient({
        url: "http://localhost:4000/graphql",
        fetchOptions: {
            credentials: "include",
        },
        exchanges: [
            dedupExchange,
            cacheExchange(cacheUpdates),
            ssr,
            fetchExchange,
        ],
    });

    ReactDOM.render(
        <React.StrictMode>
            <StateProvider>
                <Provider value={client}>
                    <App />
                </Provider>
            </StateProvider>
        </React.StrictMode>,
        document.getElementById("root")
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
};
serverSideRendering();
