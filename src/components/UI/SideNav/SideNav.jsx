import Link from "next/link";
import { useStateContext } from "@/components/HBOProvider";

const SideNav = (props) => {
	const globalState = useStateContext();

	return (
		<>
			<div
				className={`side-nav ${
					globalState.sideNavOpened ? "side-nav--active" : ""
				}`}>
				<div
					className="side-nav__close-btn"
					onClick={globalState.sideNavCloseHandler}>
					<i className="fas fa-times" />
				</div>
				<ul className="side-nav__main">
					<li onClick={globalState.sideNavCloseHandler}>
						<Link href="/">Home</Link>
					</li>
					<li onClick={globalState.sideNavCloseHandler}>
						<Link href="/movie">Movies</Link>
					</li>
					<li onClick={globalState.sideNavCloseHandler}>
						<Link href="/tv">Series</Link>
					</li>
				</ul>
			</div>
		</>
	);
};
export default SideNav;
