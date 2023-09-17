import React, { useContext, useState } from "react";

export const StateContext = React.createContext();
export function useStateContext() {
	return useContext(StateContext);
}

export function HBOProvider({ children }) {
	const [user, setUser] = useState("");
	const defaultUserImg = "https://randomuser.me/api/portraits/men/81.jpg";

	const createUserAction = (e) => {
		setUser(e.target.value);
		console.log(user);
	};
	const [sideNavOpened, setSideNavOpenedAction] = useState(false);

	const sideNavCloseHandler = () => {
		if (sideNavOpened) {
			setSideNavOpenedAction(false);
		}
	};

	const [accountModalOpened, setAccountModalOpenedAction] = useState(false);

	const [searchOpened, setSearchOpenedAction] = useState(false);

	const thumbTypes = ['large-v', 'small-v', ]

	return (
		<StateContext.Provider
			value={{
				user,
				createUserAction,
				defaultUserImg,
				sideNavOpened,
				setSideNavOpenedAction,
				sideNavCloseHandler,
				accountModalOpened,
				setAccountModalOpenedAction,
				searchOpened,
				setSearchOpenedAction,
				thumbTypes
			}}>
			{children}
		</StateContext.Provider>
	);
}
