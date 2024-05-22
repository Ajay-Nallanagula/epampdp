import React from 'react';
import ReactDOM from 'react-dom/client';
import App_Axios from './App_Axios';
import reportWebVitals from './reportWebVitals';
import AppReactQuery from './App_ReactQuery';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DEMOS } from './react-query-demos/constants';
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"


//const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 1000 * 60 * 5 } } })
const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}>
    <AppReactQuery demoLabel={DEMOS.useQueryDemo} />
    <ReactQueryDevtools />
  </QueryClientProvider>
)

// root.render(
//   <App_Axios />
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
