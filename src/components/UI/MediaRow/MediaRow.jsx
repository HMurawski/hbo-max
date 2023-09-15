import { useState, useEffect } from "react";
import axios from "axios";
import { shuffleArray } from "@/components/utilities";
import Link from "next/link";
const MediaRow = (props) => {
	const [loadingData, setLoadingData] = useState(true);
	const [movies, setMoviesData] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/${props.endpoint}&api_key=802554e9aa5883dcfd7530ef168e5072`
			)
			.then(function (response) {
				setMoviesData(shuffleArray(response.data.results));
				setLoadingData(false);

				// handle success

				console.log(response);
			})
			.catch(function (error) {
				// handle error
				console.log("error response for " + props.title);
				console.log(error);
			});
	}, []);

	const loopComp = (comp, digit) => {
		let thumbnails = [<Skeleton key={'a'}/>, <Skeleton key={'b'}/>, <Skeleton key={'c'}/>, <Skeleton key={'d'}/>, <Skeleton key={'e'}/>, <Skeleton key={'f'}/>, <Skeleton key={'g'}/>,<Skeleton key={'h'}/>, <Skeleton key={'i'}/>];
		// for (let index = 1; index <= digit; index++) {
		// 	thumbnails.push(comp);
		// }
		return thumbnails;
	};
	const showThumbnails = () => {
		return loadingData
			? loopComp(<Skeleton />, 10)
			: movies.map((movie) => {
					return <Thumbnail movieData={movie} mediaType={props.mediaType} key={movie.id}/>;
			  });
	};

	return (
		<>
			<div className={`media-row ${props.type}`}>
				<h3 className="media-row__title">{props.title}</h3>
				<div className="media-row__thumbnails">{showThumbnails()}</div>
			</div>
		</>
	);
};

const Thumbnail = (props) => {
	return (
		<Link href={`/${props.mediaType === 'movie' ? "movie" : "tv"}/${props.movieData.id}`}>
			<div className="media-row__thumbnail">
				<img
					src={`https://image.tmdb.org/t/p/w500/${props.movieData.poster_path}`}
				/>
				<div className="media-row__top-layer">
					<i className="fas fa-play" />
				</div>
			</div>
		</Link>
	);
};

const Skeleton = () => {
	return (
		<div className="media-row __thumbnail-skeleton">
			<div className="media-row__thumbnail-skeleton-img"></div>
		</div>
	);
};

MediaRow.defaultProps = {
	mediaType: 'movie'
}
export default MediaRow;
