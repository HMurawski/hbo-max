import Head from "next/head";
import { useStateContext } from "@/components/HBOProvider";
import Login from "@/components/UI/Login/Login";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Index() {
	const globalState = useStateContext();
	const router = useRouter();

	useEffect(() => {
		const loggedIn = false;
		if (loggedIn === false) {
			router.push("/create");
		}
	}, []);
	return (
		<>
			<Head>
				<title>HBO Max Clone</title>
				<meta name="description" content="HBOMAX Clone created by HM9" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<>
				<Login />
			</>
		</>
	);
}
