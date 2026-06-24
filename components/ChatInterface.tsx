"use client"
import type {Mentor} from"@/lib/mentor"
import { useState } from "react"

type ChatInterfaceProps = {
    mentor : Mentor;
}


const [input, setInput] = useState("")
export default function ChatInterface({
    mentor, 
}: ChatInterfaceProps){
    return(<div>
        Chat Interface
    </div>)
}