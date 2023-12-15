import "../styles/sidebar.scss";
import {appConfig} from "@/config/app";
import {FaRocketchat, FaUsers, FaHashtag, FaImages, FaLink} from "react-icons/fa6";

export default function Sidebar() {
    return (
        <div className={"app__sidebar"}>
            <header className="app__sidebar__header">
                <h2>{appConfig.appName}</h2>
                <p>Shaping the world of conversation</p>
            </header>
            <ul className={"app__sidebar__wrapper"}>
                <li className="app__sidebar__item active">
                    <FaRocketchat/>
                    Chat
                </li>
                <li className="app__sidebar__item">
                    <FaUsers/>
                    Contacts
                </li>
                <li className="app__sidebar__item">
                    <FaHashtag />
                    Topics
                </li>
                <li className="app__sidebar__item">
                    <FaImages />
                    Gallery
                </li>
                <li className="app__sidebar__item">
                    <FaLink/>
                    Chat Links
                </li>
            </ul>
            <main className="app__sidebar__action">
                <div className="app__sidebar__action__profile">
                <img src="https://images.pexels.com/photos/8864285/pexels-photo-8864285.jpeg" alt="User Profile Image" className={"app__sidebar__action__profile__image"}/>
                    <div className="app__sidebar__action__profile__content">
                        <h4>Jasmin</h4>
                        <small>Click for profile</small>
                    </div>
                </div>
            </main>
        </div>
    )
}
