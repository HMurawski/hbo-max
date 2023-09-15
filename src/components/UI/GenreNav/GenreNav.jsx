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
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default GenreNav;
