"use client";
import "../../styles/chat-view.scss";
import { IoMdMenu } from "react-icons/io";
import { IoSend } from "react-icons/io5";
import ChatBubble from "@/components/ChatBubbleComponent";
import {useEffect, useRef} from "react";

export default function Chat() {
    const chatContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = chatContainer.current;
        if(el) {
            el.scrollTop = el?.scrollHeight ?? 0;
        }
    }, [chatContainer]);

    return (
        <div className="app__chat">
            <header className="app__chat__header">
                <h3>Anonymous Chat</h3>
                <p>Chat anonymously without revealing your identity</p>
            </header>
            <div ref={chatContainer} className="app__chat__content">
                <ChatBubble isFrom={true} content={"Hey how are you?"}/>
                <ChatBubble content={"I'm good what about you?"}/>
                <ChatBubble isFrom={true} content={"I'm good too, Just wanted to ask and see how many people are interested in learning"}/>
                <ChatBubble content={"Yeah there are quite a few folks interested in learning new things and I think we really should focus on the teaching part not so much the profit"}/>
                <ChatBubble isFrom={true} content={"Hey how are you?"}/>
                <ChatBubble content={"I'm good what about you?"}/>
                <ChatBubble isFrom={true} content={"I'm good too, Just wanted to ask and see how many people are interested in learning"}/>
                <ChatBubble content={"Yeah there are quite a few folks interested in learning new things and I think we really should focus on the teaching part not so much the profit"}/>
                <ChatBubble isFrom={true} content={"Hey how are you?"}/>
                <ChatBubble content={"I'm good what about you?"}/>
                <ChatBubble isFrom={true} content={"I'm good too, Just wanted to ask and see how many people are interested in learning"}/>
                <ChatBubble content={"Yeah there are quite a few folks interested in learning new things and I think we really should focus on the teaching part not so much the profit"}/>
                <ChatBubble isFrom={true} content={"Hey how are you?"}/>
                <ChatBubble content={"I'm good what about you?"}/>
                <ChatBubble isFrom={true} content={"I'm good too, Just wanted to ask and see how many people are interested in learning"}/>
                <ChatBubble content={"Yeah there are quite a few folks interested in learning new things and I think we really should focus on the teaching part not so much the profit"}/>
                <ChatBubble isFrom={true} content={"Hey how are you?"}/>
                <ChatBubble content={"I'm good what about you?"}/>
                <ChatBubble isFrom={true} content={"I'm good too, Just wanted to ask and see how many people are interested in learning"}/>
                <ChatBubble content={"Yeah there are quite a few folks interested in learning new things and I think we really should focus on the teaching part not so much the profit"}/>
                <ChatBubble isFrom={true} content={"Hey how are you?"}/>
                <ChatBubble content={"I'm good what about you?"}/>
                <ChatBubble isFrom={true} content={"I'm good too, Just wanted to ask and see how many people are interested in learning"}/>
                <ChatBubble content={"Yeah there are quite a few folks interested in learning new things and I think we really should focus on the teaching part not so much the profit"}/>
                <ChatBubble isFrom={true} content={"Hey how are you?"}/>
                <ChatBubble content={"I'm good what about you?"}/>
                <ChatBubble isFrom={true} content={"I'm good too, Just wanted to ask and see how many people are interested in learning"}/>
                <ChatBubble content={"Yeah there are quite a few folks interested in learning new things and I think we really should focus on the teaching part not so much the profit"}/>
                <ChatBubble isFrom={true} content={"Hey how are you?"}/>
                <ChatBubble content={"I'm good what about you?"}/>
                <ChatBubble isFrom={true} content={"I'm good too, Just wanted to ask and see how many people are interested in learning"}/>
                <ChatBubble content={"Yeah there are quite a few folks interested in learning new things and I think we really should focus on the teaching part not so much the profit"}/>
                <ChatBubble isFrom={true} content={"Hey how are you?"}/>
                <ChatBubble content={"I'm good what about you?"}/>
                <ChatBubble isFrom={true} content={"I'm good too, Just wanted to ask and see how many people are interested in learning"}/>
                <ChatBubble content={"Yeah there are quite a few folks interested in learning new things and I think we really should focus on the teaching part not so much the profit"}/>
            </div>
            <div className="app__chat__actions">
                <div className="app__chat__actions__left">
                    <div className="app__chat__actions__menu">
                        <IoMdMenu />
                    </div>
                </div>
                <div className="app__chat__actions__center">
                    <div className="app__chat__actions__input">
                        <input type="text" name="chat" id="chat" placeholder="Send Message"/>
                    </div>
                </div>
                <div className="app__chat__actions__right">
                    <div className="app__chat__actions__send">
                        <IoSend />
                    </div>
                </div>
            </div>
        </div>
    )
}
