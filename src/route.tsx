import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Welcome } from "./pages";
import { Login, Register } from "./auth";
import Error from "./pages/Error";

const route = createBrowserRouter([
	{ path: "/", element: <Welcome />, errorElement: <Error /> },
	{ path: "/users/login", element: <Login /> },
	{ path: "/users/register", element: <Register /> },
	{ path: "/dashboard", element: <Dashboard /> },
]);

export default route;
