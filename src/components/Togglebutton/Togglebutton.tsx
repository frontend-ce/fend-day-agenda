import {CircleMinus, CirclePlus } from "lucide-react";

type Props ={
    mode: boolean;
}

export const Togglebutton = ({mode}:Props) => {
  if( mode == true ){
     return (
    <div>
      <CirclePlus ></CirclePlus>
    </div>
  );
  } else {
    return (
    <div>
      <CircleMinus></CircleMinus>
    </div>
    )
  }
 
};