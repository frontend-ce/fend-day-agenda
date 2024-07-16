
import { Palestra } from "@/api/types";
import { ButtonGroup } from "@/components/ButtonGroup";
import { DeadComponent } from "@/components/DeadComponent";
import { Header } from "@/components/Header";
import { LinkAgenda } from "@/components/LinkAgenda";
import { SpeakerCard } from "@/components/SpeakerCard";
import { useAgenda } from "@/hooks/useAgenda";


export const HomePage = () => {
  
  const { data } = useAgenda();
console.log(data);
  return (
    <section className=" flex flex-col items-center justify-center container">
    <div className="mt-8">
     <Header label={"Agenda do evento"} />
     </div>
     <LinkAgenda />
     <div className="mt-8">
     <ButtonGroup />
     </div>
     <DeadComponent title={"Abertura"} hours={"8:00"} />
     <div className="mt-8 mx-auto flex flex-col items-center justify-center gap-3">
      {data?.Convida.map((item: Palestra) => (
        <SpeakerCard
        hour={item.hour}
          label={item.title}
          tags={item.tags}
          name={item.speaker.title}
          role={item.speaker.role}
          imageUrl={item.speaker.image}
          imageFallback={item.speaker.title}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onChangeMode={function (_mode: boolean): void {
            throw new Error("Function not implemented.");
          } }       />
      ))}
     </div>
     <DeadComponent title={"Abertura"} hours={"8:00"} />
    </section>
  );
};
