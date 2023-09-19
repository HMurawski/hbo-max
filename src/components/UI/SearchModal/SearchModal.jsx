import { useStateContext } from "@/components/HBOProvider";
import { useState,useEffect } from "react";
import axios from "axios";

const SearchModal = () => {
	const globalState = useStateContext();

const [popData, setPopData] = useState([])
const[searchData, setSearchData] = useState([])
const [showResults, setShowResults] = useState(false)
const [text, setText] = useState('')

useEffect(() => {
	const fetchData = async () => {
	  try {
		let popData = await axios.get(
		  `https://api.themoviedb.org/3/discover/movie?primary_release_year=2023&api_key=802554e9aa5883dcfd7530ef168e5072`
		);
		setPopData(popData.data.results.filter((item, i) => i < 14));
		setShowResults(false);
		console.log(`dupadupaudsdadasda`);
		console.log(`popdata`, popData.data.results);
	  } catch (error) {
		// console.log(error);
		console.log(`jest error`);
	  }
	};
  
	fetchData(); // Call the async function here
  
  }, []);
  


	useEffect(()=>{
		if(globalState.searchOpened){
			document.body.style.overflowY = 'hidden'
		}else {
			document.body.style.overflowY = 'auto'
		}
	 }, [globalState.searchOpened])
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
					/>
					<div
						className="search-modal-list__close-btn"
						onClick={() => globalState.setSearchOpenedAction(false)}>
						<i className="fas fa-times" />
					</div>
				</div>

				<h3 className="search-modal-list__title">Most Popular Searches</h3>
				<div className="search-modal-list__thumbnails">
					<div className="search-modal-list__thumbnail">
						<img src="https://www.chinadaily.com.cn/culture/attachement/jpg/site1/20170326/f04da2db14841a419ea21f.jpg" />
						<div className="search-modal-list__top-layer">
							<i className="fas fa-play" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default SearchModal;
