import Link from 'next/link';

const Account = (props) => {
    return (
    
        <div className="account">
            <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
        <div className="account__watch-video">
            <img src="https://w0.peakpx.com/wallpaper/748/210/HD-wallpaper-harry-potter-harry-potter-3-magic-the-prisoner-of-azkaban-thumbnail.jpg" alt="harry potter n friends" />
            <div className="account__watch-overlay">
            <div className="account__watch-buttons">
                <div className="account__watch-circle">
                    <i className="fas fa-play"/>
                </div>
                <div className="account__watch-circle">
                    <i className="fas fa-times"/>
                </div>
            </div>
        </div>
        </div>
            </div>
        </div>
        <div className="account__menu">
            <ul className="account__main">
                <li>
                    <Link href="/" className="active">My List</Link>
                </li>
            </ul>
            <div className="side-nav__divider"/>
            <ul className="account__main">
                <li>
                    <Link href="/" className="">Account</Link>
                </li>
                <li>
                    <Link href="/" className="">Sing Out</Link>
                </li>
            </ul>
        </div>
        </div>

    )
}
export default Account