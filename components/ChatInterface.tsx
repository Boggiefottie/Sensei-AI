"use client"
import type {Mentor} from"@/lib/mentor"
import { useState } from "react"

type ChatInterfaceProps = {
    mentor : Mentor;
}
type Message = {
    role : "user" | "assistant";
    content: string
}


export default function ChatInterface({
    mentor, 
}: ChatInterfaceProps){
    const [input, setInput] = useState("")
    const [messages, setMessages] = useState<Message[]>([
    {
        role: "assistant",
        content: `Hello I am ${mentor.name}`

    }
])
function handleSend(){
    if(!input) return
    const newMessage: Message ={
        role: "user",
        content: input
    }
    setMessages([
        ...messages,
        newMessage
    ])
    setInput("")
}

    return(<div>
        {
        messages.map((message,index)=>(
        <p key={index}>
        {message.role}: {message.content}
        </p>
        ))
        }
        <input
        type="text"
        value={input}
        onChange={(e)=> setInput(e.target.value)}
        placeholder="Type your Message"
        />
        <button onClick={handleSend}>
        Send
        </button>
    </div>)
}