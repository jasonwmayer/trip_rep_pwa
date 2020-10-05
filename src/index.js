import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import App from "./App";
import configureStore from "./configureStore";
import {ThemeProvider} from "@material-ui/core";
import theme from "./theme";
import "./index.scss"

const store = configureStore();

const rootElement = document.getElementById("root");

ReactDOM.render(<ThemeProvider theme={theme}>
    <Provider store={store}>
    <App />
    </Provider>
    </ThemeProvider>,
    rootElement
);