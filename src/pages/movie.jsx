import Head from "next/head";
import MainLayout from "@/components/Layout/MainLayout";

import FeaturedMedia from "@/components/UI/Featured/FeaturedMedia";
import MediaRow from "@/components/UI/MediaRow/MediaRow";

import CastInfo from "@/components/UI/CastInfo/CastInfo";
import AuthCheck from "@/components/AuthCheck";

export default function Movie() {
	return AuthCheck(
		<>
			<Head>
				<title>HBO Max Clone</title>
				<meta name="description" content="HBOMAX Clone created by HM9" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<MainLayout>
				<FeaturedMedia mediaUrl="https://www.youtube.com/embed/KPLWWIOCOOQ?autoplay=1&loop=1&start=2"  title="Game of Thrones" linkUrl='/movie/2323'  type="front" />
				<MediaRow
						title="Movies"
						type="small-v"
						genreID="28"
						endpoint="discover/movie?with_genres=28&primary_release_year=2023"
					/>
				
                <CastInfo />
			</MainLayout>
		</>
	);
}
