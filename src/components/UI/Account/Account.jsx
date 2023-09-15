import Link from "next/link";
import { useStateContext } from "@/components/HBOProvider";

const Account = (props) => {
	const globalState = useStateContext();
	return (
		<div
			className={`account ${
				globalState.accountModalOpened ? "account--active" : ""
			}`}>
			<div className="account__details">
				<div className="account__title">My List</div>
				<div className="account__watch-list"></div>
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
						<Link href="/" className="">
							Account
						</Link>
					</li>
					<li>
						<Link href="/" className="">
							Sing Out
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Account;
