import Head from "next/head";
import MainLayout from "@/components/Layout/MainLayout";
import { useEffect, useState } from "react";
import FeaturedMedia from "@/components/UI/Featured/FeaturedMedia";
import MediaRow from "@/components/UI/MediaRow/MediaRow";
import { useRouter } from "next/router";
import CastInfo from "@/components/UI/CastInfo/CastInfo";
import AuthCheck from "@/components/AuthCheck";
import axios from "axios";
import LazyLoad from "react-lazy-load";

export default function SingleMediaPage(props) {
	const router = useRouter();
	const [mediaData, setMediaData] = useState(false);
	// const { id } = router.query

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${props.query.id}?&api_key=802554e9aa5883dcfd7530ef168e5072`
			)
			.then(function (response) {
				setMediaData(response.data);
				console.log(mediaData);
			})
			.catch(function (error) {});
	}, [mediaData]);

	return AuthCheck(
		<>
			<Head>
				<title>HBO Max Clone</title>
				<meta name="description" content="HBOMAX Clone created by HM9" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<MainLayout>
				<FeaturedMedia
					title={mediaData.title}
					linkUrl="/movie/id"
					mediaUrl={`https://image.tmdb.org/t/p/w1280/${mediaData.backdrop_path}`}
					type="single"
				/>

				<LazyLoad>
				<MediaRow
					title="More Like This"
					type="small-v"
					endpoint={`movie/${props.query.id}/similar?`}
				/>
				</LazyLoad>

				<CastInfo  mediaId={props.query.id} />
			</MainLayout>
		</>
	);
}

export async function getServerSideProps(context) {
	return {
		props: { query: context.query },
	};
}
