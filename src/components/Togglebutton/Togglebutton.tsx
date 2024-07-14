import {CircleMinus, CirclePlus } from "lucide-react";

type Props ={
    mode: boolean;
}

export const Togglebutton = ({mode}:Props) => {
  if( mode == true ){
     return (
    <div>
      <CirclePlus color="#ffffff"/>
    </div>
  );
  } else {
    return (
    <div>
      <CircleMinus color="#ffffff" />
    </div>
    )
  }
 
};