"use client";
import MentorCard from "@/components/MentorCard";
import { mentors } from "@/lib/mentor";
import { useState } from "react";
import { useRouter } from "next/router";

export default function HomePage() {
 
  const [selectedMentor, setSelectedMentor] = useState<number | null>(null)
  function handleMentorSelect(id : number){
    console.log(id)
    setSelectedMentor(id);
    
  }
  const selectedMentorData = mentors.find(mentors=> selectedMentor === mentors.id)
  const router = useRouter()

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Sensei AI
      </h1>
      <p>
      Selected Mentor: {selectedMentorData?.name}
      </p>
      <button
        disabled={selectedMentor === null}
        className="
        px-4 py-2 rounded
        bg-purple-500 text-white
        disabled:bg-gray-400
          disabled:cursor-not-allowed"
        >
          Continue
      </button>
      <div className="grid grid-cols-3 gap-4">
      
       {mentors.map((mentor)=>(
         <MentorCard 
         key={mentor.id}
         name = {mentor.name}
         anime = {mentor.anime}
         image={mentor.image}
         id={mentor.id}
         onSelect={handleMentorSelect}
         isSelected={mentor.id === selectedMentor}
         />
         
       ))}
      </div>
    </main>
  );
}