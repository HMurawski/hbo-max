import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import { useStateContext } from "@/components/HBOProvider";

const Header = (props) => {
	const globalState = useStateContext();
	return (
		<>
			<header className={`top-header ${globalState.accountModalOpened || globalState.sideNavOpened ? 'top-header--menu-opened': '' }`}>
				<div className="top-header__left-side">
					<div
						className="top-header__menu-btn"
						onClick={() => globalState.setSideNavOpenedAction(true)}>
						<i className="fas fa-bars" />
					</div>
					<div className="top-header__search-btn" onClick={()=>globalState.setSearchOpenedAction(true)} >
						<i className="fas fa-search" />
					</div>
				</div>
				<div className="top-header__logo" />
				<div className="top-header__account" onClick={()=>globalState.setAccountModalOpenedAction(globalState.accountModalOpened ? false : true)} >
					<img
						src="https://randomuser.me/api/portraits/men/81.jpg"
						className="top-header__user-img"
					/>
					<div className="top-header__user-name">Anthony</div>
				</div>
				<Account />
				<SearchModal />
			</header>
		</>
	);
};
export default Header;
