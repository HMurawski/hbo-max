import Head from "next/head";
import MainLayout from "@/components/Layout/MainLayout";
import Header from "@/components/UI/Header/Header";
import FeaturedMedia from "@/components/UI/Featured/FeaturedMedia";
import ForYouList from "@/components/UI/ForYouList/ForYouList";
import JustAdded from "@/components/UI/JustAdded/JustAdded";
import PosterView from "@/components/UI/PosterView/PosterView";
import CastInfo from "@/components/UI/CastInfo/CastInfo";

export default function Movie() {
	return (
		<>
			<Head>
				<title>HBO Max Clone</title>
				<meta name="description" content="HBOMAX Clone created by HM9" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<MainLayout>
				<FeaturedMedia />

				<PosterView />
                <CastInfo />
			</MainLayout>
		</>
	);
}
