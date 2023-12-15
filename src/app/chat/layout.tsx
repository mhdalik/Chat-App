import "../../styles/chat-view-layout.scss";
import Sidebar from "@/components/sidebar";

export default function ChatAppLayout({children}: { children: React.ReactNode }) {
    return (
        <div className={"app__chat__wrapper"}>
            <div className="app__chat__wrapper__sidebar">
                <Sidebar/>
            </div>
            <div className="app__chat__wrapper__main">
                {children}
            </div>
        </div>
    );
}
