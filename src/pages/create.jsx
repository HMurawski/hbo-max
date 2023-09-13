import Head from "next/head";
import { useStateContext } from "@/components/HBOProvider";
import ls from "local-storage";
import { v4 } from "uuid";
import { useRouter } from "next/router";

export default function CreateUser() {
	const globalState = useStateContext();
	const router = useRouter();

	const saveUser = () => {
		let users = [],
			user;

		if (ls("users") < 1) {
			user = {
				id: v4(),
				user: globalState.user,
				myListID: [],
			};
			users.push(user);
			ls("users", users);
      router.push('/login')
		} else {
			users = ls("users");
			user = {
				id: v4(),
				user: globalState.user,
				myListID: [],
			};
			users.push(user);
			ls("users", users);
			router.push("/login");
		}
	};

	console.log(globalState);
	return (
		<>
			<Head>
				<title>HBO Max Clone</title>
				<meta name="description" content="HBOMAX Clone created by HM9" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div>
				<div className="create-user">
					<div className="create-user__top">
						<div className="create-user__logo" />
						<span className="create-user__title">Create Profile</span>
					</div>
					<div className="create-user__form">
						<img
							className="create-user__user-img"
							src={globalState.defaultUserImg}
						/>
						<div className="create-user__input-group">
							<label>Name: </label>
							<input
								value={globalState.user}
								onChange={globalState.createUserAction}
								type="text"
								className="create-user__inputText"
							/>
							<div className="create-user__colors">
								<div
									className="create-user__color create-user__color--active"
									style={{
										background: "#6617cb",
										backgroundImage:
											"linear-gradient(315deg, #6617cb 0%, #cb218e 74%)",
									}}></div>
								<div
									className="create-user__color "
									style={{
										background: "#6e72fc",
										backgroundImage:
											"linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%)",
									}}></div>
								<div
									className="create-user__color "
									style={{
										background: "#6b0f1a",
										backgroundImage:
											"linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)",
									}}></div>
								<div
									className="create-user__color"
									style={{
										background: "#f0ecfc",
										backgroundImage:
											"linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%)",
									}}></div>
								<div
									className="create-user__color "
									style={{
										background: "#7f53ac",
										backgroundImage:
											"linear-gradient(315deg, #7f53ac 0%, #647dee 74%)",
									}}></div>
							</div>
						</div>
					</div>

					<div className="create-user__buttons">
						<button className="create-user__cancel">Cancel</button>
						<button className="create-user__save" onClick={saveUser}>
							Save
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
