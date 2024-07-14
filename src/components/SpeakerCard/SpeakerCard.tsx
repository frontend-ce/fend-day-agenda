import { Separator } from "@radix-ui/react-separator";
import { ProfileCard } from "../ProfileCard";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { SpeakerCardProps } from "./types";

export const SpeakerCard = ({ label, tags }: SpeakerCardProps) => {
  return (
    
    <Card className=" max-w-[300px] p-3 flex items-start flex-col justify-center
     bg-transparent border gap-4 border-[#D9B1FF] rounded-lg ">
      

      <div className="flex gap-4 justify-start items-start">
        <span className="text-[#A190B2] pt-1.5 text-[16px]">8:00</span>
        <h1 className="text-[#E6D5F7] text-xl">{label}</h1>
      </div>
      
      <div className="flex gap-2">

        {tags.map((tag: string) =>
          <Badge variant="outline" className="bg-white text-[#A855F7] font-thin rounded-lg ">{tag}</Badge> 
        )}
      <Badge variant="outline" className="bg-white text-[#A855F7] font-thin rounded-lg">Carreira</Badge>

      </div>
      <div className=" flex-cols p-2  w-full">
        <Separator className="w-full h-[0.3px] mb-4 bg-[#D9B1FF] rounded-xl" />
        <ProfileCard name={"moacir"} role={"obreiro"} imageUrl={""} imageFallback={""} />
      </div>
    </Card>

  );
};