import { MdClose } from "react-icons/md";
import { useUsers } from "../stateMangement";

interface ErrorMessage {
	errorMessage: string;
	bgColor: string;
}

const ErrorDisplay = ({ errorMessage, bgColor }: ErrorMessage) => {
	const { setClearMessage } = useUsers();
	return (
		<div className={`alert alert-${bgColor} py-2 px-2 px-md-3 d-flex justify-content-between align-items-center`}>
			<div style={{ fontWeight: "500" }}>{errorMessage}</div>

			<div onClick={setClearMessage} style={{ cursor: "pointer" }}>
				<MdClose size={25} />
			</div>
		</div>
	);
};

export default ErrorDisplay;
