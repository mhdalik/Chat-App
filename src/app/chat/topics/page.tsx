import "../../../styles/topic-view.scss";
import {appConfig} from "@/config/app";

export default function Topics() {
    return (
        <div className="app__topic">
            <header className="app__topic__header">
                <h3>Anonymous Topics</h3>
                <p>Select common {appConfig.appName} topics for selective chats</p>
            </header>
        </div>
    )
}
