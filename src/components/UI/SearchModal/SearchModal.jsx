import { useStateContext } from "@/components/HBOProvider";
const SearchModal = () => {
	const globalState = useStateContext();
	const loopComp = (comp, digit) => {
		let thumbnails = [];
		for (let index = 1; index <= digit; index++) {
			thumbnails.push(comp);
		}
		return thumbnails;
	};
	return (
		<>
			<div
				className={`search-modal-list ${
					globalState.searchOpened ? "search-modal-list--active" : ""
				}`}>
				<div className="search-modal-list__input-group">
					<input
						className="search-modal-list__input"
						type="text"
						placeholder="search for a title"
						value=""
					/>
					<div className="search-modal-list__close-btn" onClick={()=>globalState.setSearchOpenedAction(false)}>
						<i className="fas fa-times" />
					</div>
				</div>

				<h3 className="search-modal-list__title">Most Popular Searches</h3>
				<div className="search-modal-list__thumbnails">
					{loopComp(
						<div className="search-modal-list__thumbnail">
							<img src="https://www.chinadaily.com.cn/culture/attachement/jpg/site1/20170326/f04da2db14841a419ea21f.jpg" />
							<div className="search-modal-list__top-layer">
								<i className="fas fa-play" />
							</div>
						</div>,
						10
					)}
				</div>
			</div>
		</>
	);
};
export default SearchModal;
