import Head from "next/head";
import Login from "@/components/UI/Login/Login";

export default function LoginPage() {


	return (
		<>
			<Head>
				<title>HBO Max Clone</title>
				<meta name="description" content="HBOMAX Clone created by HM9" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
   
        <Login />


		</>
	);
}
