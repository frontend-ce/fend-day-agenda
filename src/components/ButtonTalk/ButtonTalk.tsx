import { useState } from "react";
import { Button } from "../ui/button";
type Props = {
  children: string | React.ReactNode;
  initialMode: boolean | undefined;
  onModeChange?: (newMode: boolean) => void;
};

export const ButtonTalk = ({ children, initialMode = false, onModeChange }: Props) => {
  const [mode, setMode] = useState(initialMode);

  const handleClick = () => {
    const newMode = !mode;
    setMode(newMode);
    if (onModeChange) {
      onModeChange(newMode);
    }
  };

  const buttonColor = mode
    ? "bg-[#A855F7] border-[0.5px] border-[#A855F7] hover:bg-[#A855F7] rounded-[5px] w-[154px]"
    : "bg-[#832BD8]/[.20] border-[0.5px] border-[#A855F7] hover:bg-[#A855F7] rounded-[5px] w-[154px]";

  return (
    <Button className={buttonColor} onClick={handleClick}>
      {children}
    </Button>
  );
};