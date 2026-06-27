import { NextResponse } from "next/server";

type ChatRequest = {

    message: string;

}

export async function POST(request: Request) {

    // Read Body
    const body :ChatRequest= await request.json()


    // Validate Empty Message
    if(!body.message.trim()) {
        return NextResponse.json({
            error:"Message Required"
        },{
            status: 400
        })
    }

    // Return Fake Response
    
        return NextResponse.json({
        "reply":"Hello Bhavya, I'm Gojo."
        }
        ,{
            status: 200
        })
    

}