import { Palestra } from "@/api/types";
import { DeadComponent } from "@/components/DeadComponent";
import { Header } from "@/components/Header";
import { LinkAgenda } from "@/components/LinkAgenda";
import { ReturnButton } from "@/components/ReturnButton";
import { SpeakerCard } from "@/components/SpeakerCard";
import { useAgenda } from "@/hooks/useAgenda";
import { useSavedTalks } from "@/hooks/useSavedTalks";

export const MyAgenda = () => {
  const { data } = useAgenda();
  const { savedCardIds, toggleSaveCard } = useSavedTalks();

  const savedTalksConvida = data?.Convida.filter((item: Palestra) =>
    savedCardIds.includes(item.id)
  );

  const savedTalksFrontend = data?.Frontend.filter((item: Palestra) =>
    savedCardIds.includes(item.id)
  );

  const savedTalksComunidades = data?.Comunidades.filter((item: Palestra) =>
    savedCardIds.includes(item.id)
  );

  return (
    <section className="container mt-12 flex flex-col items-center">
      <ReturnButton />
      <Header label="Minha Agenda" />

      <div className="mt-8">
        <LinkAgenda />
      </div>
      <DeadComponent title={"Abertura"} hours={"8:00"} />
      <div className="flex flex-col items-center gap-6 mt-6 w-full">
      {savedTalksFrontend?.map((item: Palestra) => (
          <SpeakerCard
            key={item.id}
            hour={item.hour}
            label={item.title}
            tags={item.tags}
            name={item.speaker.title}
            role={item.speaker.role}
            imageUrl={item.speaker.image}
            imageFallback={item.speaker.title}
            isSaved={true} 
            onChangeMode={() => toggleSaveCard(item.id)}
          />
        ))}
         {savedTalksComunidades?.map((item: Palestra) => (
          <SpeakerCard
            key={item.id}
            hour={item.hour}
            label={item.title}
            tags={item.tags}
            name={item.speaker.title}
            role={item.speaker.role}
            imageUrl={item.speaker.image}
            imageFallback={item.speaker.title}
            isSaved={true} 
            onChangeMode={() => toggleSaveCard(item.id)}
          />
        ))}
        {savedTalksConvida?.map((item: Palestra) => (
          <SpeakerCard
            key={item.id}
            hour={item.hour}
            label={item.title}
            tags={item.tags}
            name={item.speaker.title}
            role={item.speaker.role}
            imageUrl={item.speaker.image}
            imageFallback={item.speaker.title}
            isSaved={true} 
            onChangeMode={() => toggleSaveCard(item.id)}
          />
        ))}
      </div>
      <DeadComponent title={"Abertura"} hours={"8:00"} />
    </section>
  );
};
