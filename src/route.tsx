import { createBrowserRouter } from "react-router-dom";
import { Dashboard, Welcome } from "./pages";
import { Login, Register } from "./auth";
import Error from "./pages/Error";

const route = createBrowserRouter([{ errorElement: <Error /> }, { path: "/", element: <Welcome /> }, { path: "/users/login", element: <Login /> }, { path: "/users/register", element: <Register /> }, { path: "/dashboard", element: <Dashboard /> }]);

export default route;
