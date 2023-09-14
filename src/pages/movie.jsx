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
				<FeaturedMedia />
				<MediaRow title='More Like This' type='small-v'/>
				
                <CastInfo />
			</MainLayout>
		</>
	);
}
