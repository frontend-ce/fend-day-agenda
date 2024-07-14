import { Button } from "@/components/ui/button"
import { CircleMinus } from "lucide-react"

export const MinusButton = () => {
  return (
    
    <Button className="rounded-full bg-transparent border-transparent" variant="outline" size="icon">
    <CircleMinus className="h-8 w-8 bg-transparent border-transparent" />
  </Button>
    
  );
};
