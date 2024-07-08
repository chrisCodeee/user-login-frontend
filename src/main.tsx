import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "bootswatch/dist/journal/bootstrap.min.css";
import "./index.css";
import route from "./route.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<RouterProvider router={route} />
	</React.StrictMode>
);
