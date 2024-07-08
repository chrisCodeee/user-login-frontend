import { FormEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUsers } from "../stateMangement";
import axios from "axios";
import { ErrorDisplay } from "../components";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";

const Login = () => {
	const { loginUser, message, setLoginUser, setMessage } = useUsers();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const user = localStorage.getItem("user");

	useEffect(() => {
		user && navigate("/dashboard");
	}, []);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		await axios
			.post("https://user-login-backend-production.up.railway.app/users/login", loginUser)
			.then((res) => {
				if (res.status === 200) {
					navigate("/dashboard");
					localStorage.setItem("user", JSON.stringify(res.data));
				}
			})
			.catch((err) => {
				setMessage("error", err.response.data);
			});
	};
	return (
		<>
			<div className="row mx-0 mt-5">
				<div className="col-md-4 m-auto px-2">
					<div className="card card-body">
						<h1 className="text-center mb-3">
							<i className="fas fa-sign-in-alt"></i> Login
						</h1>

						{message.error && <ErrorDisplay errorMessage={message.error} bgColor="warning" />}
						{message.success && <ErrorDisplay errorMessage={message.success} bgColor="success" />}
						<form action="/users/login" method="POST" onSubmit={handleSubmit}>
							<div className="form-group mb-3">
								<label className="mb-2" htmlFor="email">
									Email
								</label>
								<input type="email" id="email" name="email" className="form-control" placeholder="Enter Email" value={loginUser.email} onChange={(e) => setLoginUser(e.target.name, e.target.value)} />
							</div>
							<div className="form-group" style={{ position: "relative" }}>
								<label className="mb-2" htmlFor="password">
									Password
								</label>
								<div>
									<input type={showPassword ? "text" : "password"} id="password" name="password" className="form-control pe-5" placeholder="Create Password" value={loginUser.password} onChange={(e) => setLoginUser(e.target.name, e.target.value)} />
									<div onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }}>
										{showPassword ? <MdVisibilityOff size={20} title="Hide password" /> : <MdVisibility size={20} title="Show password" />}
									</div>
								</div>
							</div>
							<button type="submit" className="btn btn-primary btn-block mt-4 w-100">
								Login
							</button>
						</form>
						<p className="lead mt-4">
							No Account? <Link to="/users/register">Register</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
