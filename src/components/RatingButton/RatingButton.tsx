import { Button } from "../ui/button";
import { RatingButtonProps } from "./types";

export const RatingButton = ({ ratingLink }: RatingButtonProps) => {
  return (
    <a href={ratingLink} target="_blank">
    <Button className="flex h-7 mt-2 py-2 bg-transparent border border-white rounded-lg font-medium px-8 hover:bg-[#842bd83e]">
      Avaliar Palestra
    </Button>
    </a>
  );
};
