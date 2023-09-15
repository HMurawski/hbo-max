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

	useEffect(() => {}, []);
	return AuthCheck(
		<>
			<MainLayout>
				{/* <FeaturedMedia
					mediaUrl="https://www.youtube.com/embed/KPLWWIOCOOQ?autoplay=1&loop=1&start=2"
					title="Game of Thrones"
					linkUrl="/movie/2323"
					type="front"
				/> */}
				<GenreNav mediaType={props.query.MediaType} genresData={props.genresData} />
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
