export default function ChatBubble({isFrom, content}: {isFrom?: boolean; content: string}) {
    return (
        <div className={`app__bubble ${isFrom ? "app__bubble__isFrom" : ""}`}>
            {content}
        </div>
    )
}
