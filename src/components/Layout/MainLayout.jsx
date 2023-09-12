import Header from "../UI/Header/Header";
import SideNav from "../UI/SideNav/SideNav";

const MainLayout = (props) => {
	return (
		<div
			style={{
				minHeight: "100vh",
				// background: "linear-gradient(315deg, #6617cb 0%, #cb218e 74%)",
				backgroundColor: "#923cb5",
				backgroundImage: "linear-gradient(147deg, #923cb5 0%, #000000 74%)",
			}}>
			<Header />
			<SideNav />

			<section className="content-container">{props.children}</section>
		</div>
	);
};
export default MainLayout;
