import { useNavigate } from "react-router-dom";
import { useUsers } from "../stateMangement";
import { useEffect } from "react";

const Dashboard = () => {
	let user = localStorage.getItem("user");
	const navigate = useNavigate();
	const { setMessage } = useUsers();

	useEffect(() => {
		if (user) {
			navigate("/dashboard");
		} else {
			navigate("/users/login");
			setMessage("error", "Please log in to view resources");
		}
	}, []);

	const userInfo = {
		name: user && JSON.parse(user).name,
		email: user && JSON.parse(user).email,
	};

	const logout = () => {
		localStorage.clear();
		navigate("/users/login");
		setMessage("success", "Logged out successfully!");
	};

	return (
		<div style={{ maxWidth: "80vw", margin: "20px auto" }}>
			<h1 className="mt-4">Dashboard</h1>
			<p className="lead mb-3">Welcome {userInfo.name}</p>
			<button className="btn btn-secondary" onClick={logout}>
				Logout
			</button>
		</div>
	);
};

export default Dashboard;
