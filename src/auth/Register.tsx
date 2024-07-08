import { Link, useNavigate } from "react-router-dom";
import { useUsers } from "../stateMangement";
import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { ErrorDisplay } from "../components";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Register = () => {
	const { registerUser, message, setMessage, setRegisterUser } = useUsers();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const user = localStorage.getItem("user");

	useEffect(() => {
		user && navigate("/dashboard");
	}, []);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		await axios
			.post("http://localhost:5000/users/register", registerUser)
			.then((res) => {
				console.log(res.data);

				if (res.status === 200) {
					navigate("/users/login");
					setMessage("success", "You are now registered and can log in");
				}
			})
			.catch((err) => {
				setMessage("error", err.response.data);
				// console.log(err);
			});
	};
	return (
		<>
			<div className="row mx-0 mt-5">
				<div className="col-md-4  m-auto px-2">
					<div className="card card-body">
						<h1 className="text-center mb-4">
							<i className="fas fa-user-plus"></i> Register
						</h1>

						{/* Error or Success message */}
						{message.success && <ErrorDisplay errorMessage={message.success} bgColor="success" />}
						{message.error && <ErrorDisplay errorMessage={message.error} bgColor="warning" />}

						<form onSubmit={handleSubmit}>
							<div className="form-group mb-3">
								<label className="mb-2" htmlFor="name">
									Name
								</label>
								<input type="name" id="name" name="name" className="form-control" placeholder="Enter Name" value={registerUser.name} onChange={(e) => setRegisterUser(e.target.name, e.target.value)} />
							</div>
							<div className="form-group mb-3">
								<label className="mb-2" htmlFor="email">
									Email
								</label>
								<input type="email" id="email" name="email" className="form-control" placeholder="Enter Email" value={registerUser.email} onChange={(e) => setRegisterUser(e.target.name, e.target.value)} />
							</div>
							<div className="form-group mb-3" style={{ position: "relative" }}>
								<label className="mb-2" htmlFor="password">
									Password
								</label>
								<div>
									<input type={showPassword ? "text" : "password"} id="password" name="password" className="form-control pe-5" placeholder="Create Password" value={registerUser.password} onChange={(e) => setRegisterUser(e.target.name, e.target.value)} />
									<div onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }}>
										{showPassword ? <MdVisibilityOff size={20} title="Hide password" /> : <MdVisibility size={20} title="Show password" />}
									</div>
								</div>
							</div>

							<div className="form-group" style={{ position: "relative" }}>
								<label className="mb-2" htmlFor="confirmPassword">
									Confirm Password
								</label>
								<div>
									<input type={showConfirmPassword ? "text" : "password"} id="password" name="confirmPassword" className="form-control pe-5" placeholder="Create Password" value={registerUser.confirmPassword} onChange={(e) => setRegisterUser(e.target.name, e.target.value)} />
									<div onClick={() => setShowConfirmPassword(!showConfirmPassword)} style={{ position: "absolute", right: "10px", top: "38px", cursor: "pointer" }}>
										{showConfirmPassword ? <MdVisibilityOff size={20} title="Hide password" /> : <MdVisibility size={20} title="Show password" />}
									</div>
								</div>
							</div>

							<button type="submit" className="btn btn-primary btn-block w-100 mt-4">
								Register
							</button>
						</form>
						<p className="lead mt-4">
							Have An Account? <Link to="/users/login">Login</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Register;
