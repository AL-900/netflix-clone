import "@babel/polyfill";
import "regenerator-runtime/runtime";
import "bootstrap/dist/css/bootstrap.css";
import "/src/css/style.css";
import React from "react";
import { render } from "react-dom";
import App from "/src/js/App";

render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("app")
);
