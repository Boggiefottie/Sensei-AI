import Image from "next/image";

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";

type MentorCardProps = {
  id: number;
  name: string;
  anime: string;
  image: string;
  onSelect: (id: number) => void;
  isSelected: boolean
  
};

export default function MentorCard({ name,anime, image, onSelect,id , isSelected}: MentorCardProps) {
  return (
    
      <Card className={`cursor-pointer hover:shadow-lg hover:scale-105 ${
      isSelected ? "border-4 border-purple-500" : ""
      }`}
       onClick ={()=>onSelect(id)}
      >
       
      <CardContent className="text-center flex flex-col items-center">
      <Image
      src={image}
      width={200}
      height={200}
      alt={name}
      />
      <h2>{name}</h2>
      <h2>{anime}</h2>
      
      </CardContent>
      </Card>
    
  );
}