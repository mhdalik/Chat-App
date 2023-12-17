import "../../styles/chat-view-layout.scss";
import SidebarComponent from "@/components/SidebarComponent";

export default function ChatAppLayout({children}: { children: React.ReactNode }) {
    return (
        <div className={"app__chat__wrapper"}>
            <div className="app__chat__wrapper__sidebar">
                <SidebarComponent/>
            </div>
            <div className="app__chat__wrapper__main">
                {children}
            </div>
        </div>
    );
}
