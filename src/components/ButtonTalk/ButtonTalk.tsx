import { Button } from "../ui/button";
type Props = {
  children: string | React.ReactNode;
  mode: boolean | undefined;
};

export const ButtonTalk = ({ children, mode }: Props) => {
  if (mode === true) {
    return (
      <Button className="bg-[#A855F7] border-[0.5px] border-[#A855F7] hover:bg-[#A855F7] rounded-[5px] w-[154px]">{children}</Button>
    );
  } else {
    return (
      <Button className="bg-[#832BD8]/[.20] border-[0.5px] border-[#A855F7] hover:bg-[#A855F7] rounded-[5px] w-[154px]">{children}</Button>
    );
  }
};