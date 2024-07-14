import { Button } from "@/components/ui/button"
import { CirclePlus } from "lucide-react"

export const PlusButton = () => {
  return (
    
      <Button className="rounded-full bg-transparent border-transparent" variant="outline" size="icon">
     <CirclePlus className="h-8 w-8 bg-transparent border-transparent" />
     </Button>
    
  );
};
