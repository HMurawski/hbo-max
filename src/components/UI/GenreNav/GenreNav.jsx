import Link from "next/link";
import { useState } from "react";
import { useStateContext } from "@/components/HBOProvider";

const GenreNav = (props) => {
  const globalState = useStateContext();
  const [activeNav, setActiveNav] = useState(false);

 setTimeout(()=> setActiveNav(true), 1000)

  return (
    <>
      <ul className={`genre-nav ${activeNav ? 'genre-nav--active' : ""} `} >

		<GenreList genresData={props.genresData} mediaType={props.mediaType}  />
      
      
      </ul>
    </>
  );
};

const GenreList = (props) => {
	return props.genresData.map((item)=> {
		return (
			<li  key={item.id}>
			<Link href={`/${props.mediaType}/genre/${item.id}`}>{item.name}</Link>
		  </li>
		)
	})
}

export default GenreNav;
