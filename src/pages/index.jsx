import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
	return (
		<>
			<Head>
				<title>HBO Max Clone</title>
				<meta name="description" content="HBOMAX Clone created by HM9" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
    <div>
      <div className="login-user">
        <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">
          Who Is Watching?
        </span>
        </div>
        <div className="login-user__form">
          <div className="login-user__user-box">
            <img className="login-user__user-img" src="https://randomuser.me/api/portraits/men/81.jpg" />
            <div className="login-user__user-name">Anthony</div>
          </div>
        </div>
        
        <div className="login-user__buttons">
          <button className="login-user__adult">Add Adult</button>
          <button className="login-user__kid">Add Kid</button>
        </div>
      </div>
    </div>



		</>
	);
}
