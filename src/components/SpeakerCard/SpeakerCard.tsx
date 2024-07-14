import { SpeakerCardProps } from "./types";

export const SpeakerCard = ({label}:SpeakerCardProps) => {
  return (
    <div>
      <h1>{label}</h1>
    </div>
  );
};