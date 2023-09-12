import Head from "next/head";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function CreateUser() {
	return (
		<>
			<Head>
				<title>HBO Max Clone</title>
				<meta name="description" content="HBOMAX Clone created by HM9" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
    <div>
      <div className="create-user">
        <div className="create-user__top">
        <div className="create-user__logo" />
        <span className="create-user__title">
          Create Profile
        </span>
        </div>
        <div className="create-user__form">
          
            <img className="create-user__user-img" src="https://randomuser.me/api/portraits/men/81.jpg" />
            <div className="create-user__input-group">
                <label>Name: </label>
                <input type='text' className="create-user__inputText" />
                <div className="create-user__colors">
                    <div className="create-user__color create-user__color--active" style={{
                        background: '#6617cb',
                        backgroundImage: 'linear-gradient(315deg, #6617cb 0%, #cb218e 74%)',
                    }}></div>
                     <div className="create-user__color " style={{
                        background: '#6e72fc',
                        backgroundImage: 'linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%)',
                    }}></div>
                     <div className="create-user__color " style={{
                        background:'#6b0f1a',
                        backgroundImage: 'linear-gradient(315deg, #6b0f1a 0%, #b91372 74%)',
                        
                    }}></div>
                     <div className="create-user__color" style={{
                        background: '#f0ecfc',
                        backgroundImage: 'linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%)',
                    }}></div>
                     <div className="create-user__color " style={{
                        background: '#7f53ac',
                        backgroundImage: 'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)',
                    }}></div>
                    
                </div>
            </div>
         
        </div>
        
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>



		</>
	);
}