import Link from "next/link";
import { useStateContext } from "@/components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ls from 'local-storage'

const Account = (props) => {
	const globalState = useStateContext();
	const router = useRouter()

	useEffect(() => {
		if (globalState.accountModalOpened) {
			document.body.style.overflowY = "hidden";
		} else {
			document.body.style.overflowY = "auto";
		}
	}, [globalState.accountModalOpened]);

	const watchMedia = (url) => {
		router.push(url)
		globalState.setAccountModalOpenedAction(!globalState.accountModalOpened)
	}
	const showWatchList = () => {
		return globalState.watchList.map((item, index) => {
			return (
				<div className="account__watch-video" key={index} >
					<img src={item.mediaUrl} />
					<div className="account__watch-overlay">
						<div className="account__watch-buttons">
							<div className="account__watch-circle" onClick={()=> watchMedia(`/${item.mediaType}/${item.mediaId}`)}>
								<i className="fas fa-play" />
							</div>
							<div className="account__watch-circle" onClick={()=> globalState.removeFromList(item.mediaId)} >
								<i className="fas fa-times" />
							</div>
						</div>
					</div>
				</div>
			);
		});
	};

	const signOut = () => {
		ls.remove('users')
		router.push('/')
	}
	return (
		<div
			className={`account ${
				globalState.accountModalOpened ? "account--active" : ""
			}`}>
			<div className="account__details">
				<div className="account__title">My List</div>
				<div className="account__watch-list">
					{globalState.watchList !== null ? showWatchList() : 'No movies added yet.'}
				</div>
			</div>
			<div className="account__menu">
				<ul className="account__main">
					<li>
						<Link href="/" className="active">
							My List
						</Link>
					</li>
				</ul>
				<div className="side-nav__divider" />
				<ul className="account__main">
					<li>
						<Link href="/" >
							Account
						</Link>
					</li>
					<li>
						<Link href="/create" onClick={signOut}>
							Sing Out
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Account;
