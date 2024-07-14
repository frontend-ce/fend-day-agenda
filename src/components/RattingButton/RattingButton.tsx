import { Button } from "../ui/button";
import { RattingButtonProps } from "./types";

export const RattingButton = ({ label }: RattingButtonProps) => {
  return (
    <Button className="h-7 py-2 bg-transparent border border-white rounded-lg font-medium px-8 hover:bg-[#842bd83e]">
      {label}
    </Button>
  );
};
