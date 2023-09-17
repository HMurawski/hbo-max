import Head from "next/head";
import { useStateContext } from "@/components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/Layout/MainLayout";
import FeaturedMedia from "@/components/UI/Featured/FeaturedMedia";
import AuthCheck from "@/components/AuthCheck";
import MediaRow from "@/components/UI/MediaRow/MediaRow";
import LazyLoad from "react-lazy-load";
import Placeholder from "@/components/UI/Placeholder/Placeholder";
import GenreNav from "@/components/UI/GenreNav/GenreNav";
import { shuffleArray } from "@/components/utilities";
import axios from "axios";

export default function MediaTypePage(props) {
	const globalState = useStateContext();
	const router = useRouter();

	const showRandomMedia = () => {
		let thumbType;
		return props.genresData.map((item)=>{
			thumbType = shuffleArray(globalState.thumbTypes)[0]
			return (
				<LazyLoad  >
					<MediaRow
						title={item.name}
						type={thumbType}
						// mediaType="movie"
						genreID="28"
						endpoint={`discover/${props.query.mediaType}?with_genres=${item.id}&sort_by=popularity.desc&primary_release_year=2022`}
						key={item.id}
						
					/>
				</LazyLoad>
			)
		})
	}


	return AuthCheck(
		<>
			<MainLayout>
				<FeaturedMedia
					mediaUrl={`https://image.tmdb.org/t/p/w1280/${props.featuredData.backdrop_path}`}
					title={
						props.query.mediaType === "movie"
							? props.featuredData.title
							: props.featuredData.name
					}
					linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
					type="single"
				/>
				<GenreNav
					mediaType={props.query.MediaType}
					genresData={props.genresData}
				/>
				{showRandomMedia()}
				<LazyLoad>
					<MediaRow
						title="Movies"
						type="large-v"
						mediaType="movie"
						genreID="28"
						endpoint="discover/movie?with_genres=28&primary_release_year=2023"
					/>
				</LazyLoad>
			</MainLayout>
		</>
	);
}

export async function getServerSideProps(context) {
	let genresData;
	let featuredData;

	try {
		genresData = await axios.get(
			`https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=802554e9aa5883dcfd7530ef168e5072`
		);
		featuredData = await axios.get(
			`https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2023&api_key=802554e9aa5883dcfd7530ef168e5072`
		);
	} catch (error) {
		console.log("error");
		console.log(error);
	}

	return {
		props: {
			genresData: genresData.data.genres,
			featuredData: shuffleArray(featuredData.data.results)[0],
			query: context.query,
		},
	};
}
