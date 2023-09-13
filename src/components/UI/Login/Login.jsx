import Head from "next/head";
import { useState, useEffect } from "react";
import { useStateContext } from "@/components/HBOProvider";
import { useRouter } from "next/router";
import ls from "local-storage";
import { useMounted } from "@/components/hooks/useMounted";

const Login = () => {
	const globalState = useStateContext();

	const router = useRouter();

	const [loadingUsers, setLoadingUsers] = useState(false);
	let users = ls("users") !== null ? ls("users") : [];

	let { hasMounted } = useMounted();

	useEffect(() => {
		if (users < 1) {
			setLoadingUsers(false);
		}
	}, []);

	const selectUser = (id) => {
		ls("activeUID", id);

		router.push("/");
	};

	const showUsers = () => {
		if (!loadingUsers) {
			return users.map((user) => {
				return (
					<div
						className="login-user__user-box"
						key={user.id}
						onClick={() => selectUser(user.id)}>
						<img
							className="login-user__user-img"
							src="https://randomuser.me/api/portraits/men/81.jpg"
						/>
						<div className="login-user__user-name">{user.user}</div>
					</div>
				);
			});
		}
	};

	const createUser = () => {
		router.push("/");
	};

	return (
		<>
			<Head>
				<title>HBO Max Clone</title>
				<meta name="description" content="HBOMAX Clone created by HM9" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div>
				<div className="login-user">
					<div className="login-user__top">
						<div className="login-user__logo" />
						<span className="login-user__title">Who Is Watching?</span>
					</div>
					<div className="login-user__form">
						{hasMounted && showUsers()}
						{/* <div className="login-user__user-box">
            <img className="login-user__user-img" src="https://randomuser.me/api/portraits/men/81.jpg" />
            <div className="login-user__user-name">{globalState.text}</div>
          </div> */}
					</div>

					<div className="login-user__buttons">
						<button className="login-user__kid" onClick={createUser}>
							Create User
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
