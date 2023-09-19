import React, { useContext, useState } from "react";
import ls from 'local-storage'
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
	const [watchList, setWatchList] = useState(ls.get('myList'))

	const addToList = (video) => {
		let myList
		if(ls('myList') !== null){
			myList = ls.get('myList')
			myList.push(video)
			ls.set('myList', myList)
			setWatchList(myList)
		} else {
			ls.set('myList', [video])
		}
	}

	const removeFromList = (videoId)=>{
		let myList = ls('myList')
		myList = myList.filter((item)=>item.mediaId != videoId)
		ls.set('myList', myList)
		setWatchList(myList)
	}

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
				thumbTypes, 
				addToList,
				removeFromList,
				watchList
			}}>
			{children}
		</StateContext.Provider>
	);
}
