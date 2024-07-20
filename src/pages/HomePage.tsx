import { Palestra } from "@/api/types";
import { ButtonGroup } from "@/components/ButtonGroup";
import { DeadComponent } from "@/components/DeadComponent";
import { Header } from "@/components/Header";
import { LinkAgenda } from "@/components/LinkAgenda";
import { ReturnButton } from "@/components/ReturnButton";
import { SpeakerCard } from "@/components/SpeakerCard";
import { useAgenda } from "@/hooks/useAgenda";

export const HomePage = () => {
  const { data } = useAgenda();

  return (
    <section className="container mt-12 flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <ReturnButton />
      <Header label="Agenda do Evento" />

      <LinkAgenda />
      <div className="mt-8 w-full flex justify-center">
        <ButtonGroup />
      </div>
      <DeadComponent title="Abertura" hours="8:00" />
      <div className="mt-8 w-full flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        {data?.Convida.map((item: Palestra) => (
          <SpeakerCard
            key={item.title}
            hour={item.hour}
            label={item.title}
            tags={item.tags}
            name={item.speaker.title}
            role={item.speaker.role}
            imageUrl={item.speaker.image}
            imageFallback={item.speaker.title}
            isSaved={false}
            onChangeMode={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ))}
      </div>
      <DeadComponent title="Encerramento" hours="18:00" />
    </section>
  );
};
