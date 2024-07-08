import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Welcome = () => {
	const user = localStorage.getItem("user");
	const navigate = useNavigate();

	useEffect(() => {
		user && navigate("/dashboard");
	}, []);

	return (
		<div className="row mt-5">
			<div className="col-md-4 m-auto">
				<div className="card card-body text-center">
					<h1>
						<i className="fab fa-node-js fa-3x"></i>
					</h1>
					<p>Create an account or login</p>
					<Link to="/users/register" className="btn btn-primary btn-block mb-2">
						Register
					</Link>
					<a href="/users/login" className="btn btn-secondary btn-block">
						Login
					</a>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
