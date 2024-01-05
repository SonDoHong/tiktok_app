import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from './component/GlobalStyles'
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyles>
            <App /> 
        </GlobalStyles>
    </React.StrictMode>
);
