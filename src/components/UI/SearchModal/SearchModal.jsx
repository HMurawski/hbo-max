import { useStateContext } from "@/components/HBOProvider";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchModal = (props) => {
	const globalState = useStateContext();

	const [popData, setPopData] = useState([]);
	const [searchData, setSearchData] = useState([]);
	const [showResults, setShowResults] = useState(false);
	const [text, setText] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				let popData = await axios.get(
					`https://api.themoviedb.org/3/discover/movie?primary_release_year=2023&api_key=802554e9aa5883dcfd7530ef168e5072`
				);
				setPopData(popData.data.results.filter((item, i) => i< 14 ));
				setShowResults(false);

				console.log(`popdata`, popData.data.results);
			} catch (error) {
				console.log(`jest error`);
			}
		};

		fetchData(); // Call the async function here
	}, []);

	useEffect(() => {
		if (globalState.searchOpened) {
			document.body.style.overflowY = "hidden";
		} 
		 else {
			document.body.style.overflowY = "auto";
		}
	}, [globalState.searchOpened]);

	const handleInput = async (e) => {
		try {
			setText(e.target.value);
			let searchData = await axios.get(
				`https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=802554e9aa5883dcfd7530ef168e5072`
			);
			setSearchData(
				searchData.data.results.filter(
					(item, i) => item.media_type === "tv" || item.media_type === "movie"
				)
			);
			setShowResults(true);
		} catch (error) {
			console.log(`input error`);
		}
	};
	const router = useRouter();
	const clickedThumbnail = (type, id, media_type) => {
		if (type === "popular") {
			router.push(`/movie/${id}`);
			globalState.setSearchOpenedAction(false);
		}
		if (type === "search") {
			router.push(`/${media_type}/${id}`);
			globalState.setSearchOpenedAction(false);
		}
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
						onChange={handleInput}
						value={text}
					/>
					<div
						className="search-modal-list__close-btn"
						onClick={() => globalState.setSearchOpenedAction(false)}>
						<i className="fas fa-times" />
					</div>
				</div>

				<h3 className="search-modal-list__title"> {showResults && searchData.length >= 1 ? `Search Results for: ${text}` : 
				'Most Popular Searches'}</h3>
				<div className="search-modal-list__thumbnails">
					{showResults && searchData.length >= 1 ? (
						<SearchResults
							clickedThumbnail={clickedThumbnail}
							searchData={searchData}
						/>
					) : (
						<PopularResults
							popData={popData}
							clickedThumbnail={clickedThumbnail}
						/>
					)}
				</div>
			</div>
		</>
	);
};

const PopularResults = (props) => {
	return props.popData.map((item, index) => {
		return (
			<div
				key={index}
				className="search-modal-list__thumbnail"
				onClick={() => props.clickedThumbnail("popular", item.id)}>
				<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
				<div className="search-modal-list__top-layer">
					<i className="fas fa-play" />
				</div>
			</div>
		);
	});
};

const SearchResults = (props) => {
	return props.searchData.map((item, index) => {
		return (
			<div
				key={index}
				className="search-modal-list__thumbnail"
				onClick={() => props.clickedThumbnail("popular", item.id, item.media_type)}>
				<img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
				<div className="search-modal-list__top-layer">
					<i className="fas fa-play" />
				</div>
			</div>
		);
	});
};

export default SearchModal;
