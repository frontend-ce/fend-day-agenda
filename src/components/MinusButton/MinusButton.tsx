import { Button } from "@/components/ui/button"
import { CircleMinus } from "lucide-react"

export const MinusButton = () => {
  return (
    
    <Button variant="outline" size="icon">
    <CircleMinus className="h-4 w-4" />
  </Button>
    
  );
};

