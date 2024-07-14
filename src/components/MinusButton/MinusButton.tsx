import { Button } from "@/components/ui/button"
import { CircleMinus } from "lucide-react"

export const MinusButton = () => {
  return (
    
    <Button className="rounded-full" variant="outline" size="icon">
    <CircleMinus className="h-8 w-8" />
  </Button>
    
  );
};

