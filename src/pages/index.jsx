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

export default function Index() {
	const globalState = useStateContext();
	const router = useRouter();

	useEffect(() => {}, []);
	return AuthCheck(
		<>
			<Head>
				<title>HBO Max Clone</title>
				<meta name="description" content="HBOMAX Clone created by HM9" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>

			<MainLayout>
				<FeaturedMedia
					mediaUrl="https://www.youtube.com/embed/KPLWWIOCOOQ?autoplay=1&loop=1&start=2"
					title="Game of Thrones"
					linkUrl="/movie/2323"
					type="front"
				/>
				<LazyLoad>
					<MediaRow
						title="Movies"
						type="large-v"
						mediaType="movie"
						genreID="28"
						endpoint="discover/movie?with_genres=28&primary_release_year=2023"
					/>
				</LazyLoad>

				<LazyLoad>
					<MediaRow
						title="Series"
						mediaType="tv"
						type="small-h"
						genreID="80"
						endpoint="/discover/tv?"
					/>
				</LazyLoad>

				<LazyLoad>
					<MediaRow
						title="Fantasy"
						type="small-v"
						mediaType="movie"
						genreID="14"
						endpoint="discover/movie?with_genres=14&primary_release_year=2023"
					/>
				</LazyLoad>

				<LazyLoad>
					<MediaRow
						title="Drama"
						type="small-v"
						mediaType="movie"
						genreID="18"
						endpoint="discover/movie?with_genres=18&primary_release_year=2023"
					/>
				</LazyLoad>

				<LazyLoad>
					<MediaRow
						title="Sci-Fi"
						type="small-v"
						genreID="878"
						mediaType="movie"
						endpoint="discover/movie?with_genres=878&primary_release_year=2023"
					/>
				</LazyLoad>

				<LazyLoad>
					<MediaRow
						title="Thriller"
						type="small-v"
						genreID="53"
						mediaType="movie"
						endpoint="discover/movie?with_genres=53&primary_release_year=2023"
					/>
				</LazyLoad>

				<LazyLoad>
					<MediaRow
						title="Documentary"
						type="small-v"
						mediaType="movie"
						genreID="99"
						endpoint="discover/movie?with_genres=99&primary_release_year=2023"
					/>
				</LazyLoad>
			</MainLayout>
		</>
	);
}
