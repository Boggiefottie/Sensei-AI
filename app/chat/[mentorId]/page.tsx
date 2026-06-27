import { Card, CardContent } from "@/components/ui/card";
import { mentors } from "@/lib/mentor";
import Image from "next/image";
import ChatInterface from "@/components/ChatInterface";
export default async function ChatPage({
  params,
}: {
  params: Promise<{
    mentorId: string;
  }>;
}) {

  const { mentorId } = await params;

  const mentor = mentors.find(
    (mentor) => mentor.id === Number(mentorId)
  );

  if (!mentor) {
    return <div>Mentor not found</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4 justify-center"> 
    <Card>
    <CardContent className="flex flex-col items-center text-center" >
    <Image
      src={mentor.image}
      alt={mentor.name}
      width={200}
      height={200}
    />

    <h1>{mentor.name}</h1>

    <p>{mentor.anime}</p>

    <p>"{mentor.quote}"</p>

    <button className=" cursor-pointer
    mt-4
    px-4 py-2
    rounded
  bg-purple-500
  text-white
    ">
      Start Chat
    </button>
    </CardContent>    
    </Card>
    <ChatInterface mentor={mentor}/>
    </div>
  
);
}