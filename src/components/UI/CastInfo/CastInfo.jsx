import { useState, useEffect } from "react";
import axios from "axios";


const CastInfo = (props) => {
	const [loadingData, setLoadingData] = useState(true);
	const [credits, setCredits] = useState([]);

	useEffect(() => {
		axios
			.get(
				`https://api.themoviedb.org/3/${props.mediaType === 'movie'? 'movie' : 'tv'}/${props.mediaId}/credits?api_key=802554e9aa5883dcfd7530ef168e5072`
			)
			.then(function (response) {
				setCredits(response.data);
				setLoadingData(false);
				console.log(credits.crew);
                
				// handle success
			})
			.catch(function (error) {
				// handle error
				
			});
	}, [props.mediaId, props.mediaType, props.updateData]);
	
   
	const showCast = () => {
		if (loadingData !== true) {
			return credits.cast.map((item) => (
				<ul className="cast-info__crew" key={item.id}>
					<li>{item.character}</li>
					<li>{item.name}</li>
				</ul>
			));
		} else {
			return <div>Loading cast information...</div>;
		}
	};
    
	const showCrew = () => {
        if (loadingData !== true) {
          return credits.crew.map((i) => (
            <ul className="cast-info__crew" key={i.id}>
              <li>{i.job}</li>
              <li>{i.name}</li>
            </ul>
          ));
        } else {
          return <div>Loading crew information...</div>;
        }
      };

	
	return (
		<>
			<div className="cast-info">
				<div className="cast-info__group-title">Cast</div>
				<div className="cast-info__list">
					{showCast()}

					<div className="cast-info__group-title">Crew</div>
                    {showCrew()}
				</div>
			</div>
		</>
	);
};
export default CastInfo;
