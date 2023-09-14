import Head from "next/head";
import { useStateContext } from "@/components/HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/Layout/MainLayout";
import FeaturedMedia from "@/components/UI/Featured/FeaturedMedia";
import ForYouList from "@/components/UI/ForYouList/ForYouList";
import JustAdded from "@/components/UI/JustAdded/JustAdded";
import PosterView from "@/components/UI/PosterView/PosterView";
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
				<MediaRow />
				<ForYouList />
				<JustAdded />
				<PosterView />
			</MainLayout>
		</>
	);
}
