import "../../../styles/contact-view.scss";
import {appConfig} from "@/config/app";

export default function Contacts() {
    return (
        <div className="app__contact">
            <header className="app__contact__header">
                <h3>Anonymous Contacts</h3>
                <p>Saved {appConfig?.appName} members will be shown here</p>
            </header>
        </div>
    )
}
