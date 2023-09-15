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

export default function Index() {
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
                <GenreNav />
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
