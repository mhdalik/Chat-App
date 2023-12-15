"use client";
import "../styles/sidebar.scss";
import {appConfig} from "@/config/app";
import {FaRocketchat, FaUsers, FaHashtag, FaImages, FaLink} from "react-icons/fa6";
import Link from "next/link";
import {usePathname} from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    return (
        <div className={"app__sidebar"}>
            <header className="app__sidebar__header">
                <h2>{appConfig.appName}</h2>
                <p>Shaping the world of conversation</p>
            </header>
            <ul className={"app__sidebar__wrapper"}>
                <Link href={"/chat"}>
                    <li className={`app__sidebar__item ${pathname == "/chat" ? "active" : ""}`}>
                        <FaRocketchat/>
                        Chat
                    </li>
                </Link>
                <Link href={"/chat/contact"}>
                    <li className={`app__sidebar__item ${pathname == "/chat/contact" ? "active" : ""}`}>
                    <FaUsers/>
                        Contacts
                    </li>
                </Link>
                <Link href={"/chat/topics"}>
                    <li className={`app__sidebar__item ${pathname == "/chat/topics" ? "active" : ""}`}>
                        <FaHashtag/>
                        Topics
                    </li>
                </Link>
                <li className="app__sidebar__item">
                    <FaImages/>
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
