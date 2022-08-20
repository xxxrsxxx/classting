import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import Router from "./router";

import "./index.css";
const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background: #333;
  }
  
`;

let dev = false;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity },
  },
});

if (process.env.NODE_ENV === "development") {
  dev = true;
  const { worker } = require("./mocks/browser");
  worker.start();
}

const persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={dev} />
          <GlobalStyle />
          <Router />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
