import { create } from "zustand";

type RegisterUsers = {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
};

type LoginUser = {
	email: string;
	password: string;
};

interface UserProps {
	registerUser: RegisterUsers;
	loginUser: LoginUser;
	message: {
		error: string;
		success: string;
	};

	setRegisterUser: (userParams: string, userValue: string) => void;
	setLoginUser: (userParams: string, userValue: string) => void;
	setMessage: (errorType: string, message: string) => void;
	setClearMessage: () => void;

	// setUserLogin: (email: string, password: string) => void;
	clearRegisterUserInput: () => void;
}

const useUsers = create<UserProps>((set) => ({
	registerUser: {
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	},

	loginUser: {
		email: "",
		password: "",
	},

	message: {
		error: "",
		success: "",
	},

	// To set the details to send as post request during Register
	setRegisterUser: (userParams, userValue) => set((store) => ({ registerUser: { ...store.registerUser, [userParams]: userValue }, message: { error: "", success: "" } })),
	setLoginUser: (userParams, userValue) => set((store) => ({ loginUser: { ...store.loginUser, [userParams]: userValue }, message: { error: "", success: "" } })),

	setMessage: (errorType, message) => set((store) => ({ message: { ...store.message, [errorType]: message } })),
	setClearMessage: () => set(() => ({ message: { error: "", success: "" } })),

	// To clear the details when logged in
	clearRegisterUserInput: () => set(() => ({ registerUser: { name: "", password: "", email: "", confirmPassword: "" } })),
}));

export default useUsers;
