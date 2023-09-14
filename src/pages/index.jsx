import Head from "next/head";
import { useStateContext } from "@/components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/Layout/MainLayout";
import FeaturedMedia from "@/components/UI/Featured/FeaturedMedia";
import AuthCheck from "@/components/AuthCheck";
import MediaRow from "@/components/UI/MediaRow/MediaRow";

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
				<FeaturedMedia />
				<MediaRow
					title="Movies"
					type="large-v"
					genreID="28"
					endpoint="discover/movie?with_genres=28&primary_release_year=2023"
				/>
				<MediaRow
					title="Series"
					type="small-h"
					genreID="80"
					endpoint="discover/movie?with_genres=80&primary_release_year=2023"
				/>
				<MediaRow
					title="Fantasy"
					type="small-v"
					genreID="14"
					endpoint="discover/movie?with_genres=14&primary_release_year=2023"
				/>
				<MediaRow
					title="Drama"
					type="small-v"
					genreID="18"
					endpoint="discover/movie?with_genres=18&primary_release_year=2023"
				/>
				<MediaRow
					title="Sci-Fi"
					type="small-v"
					genreID="878"
					endpoint="discover/movie?with_genres=878&primary_release_year=2023"
				/>
				<MediaRow
					title="Thriller"
					type="small-v"
					genreID="53"
					endpoint="discover/movie?with_genres=53&primary_release_year=2023"
				/>
				<MediaRow
					title="Documentary"
					type="small-v"
					genreID="99"
					endpoint="discover/movie?with_genres=99&primary_release_year=2023"
				/>
			</MainLayout>
		</>
	);
}
