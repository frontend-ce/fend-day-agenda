import { Palestra } from "@/api/types";
import { DeadComponent } from "@/components/DeadComponent";
import { Header } from "@/components/Header";
import { LinkAgenda } from "@/components/LinkAgenda";
import { ReturnButton } from "@/components/ReturnButton";
import { SpeakerCard } from "@/components/SpeakerCard";
import { useAgenda } from "@/hooks/useAgenda";
import { useSavedTalks } from "@/hooks/useSavedTalks";

const convertToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

const convertToTimeString = (minutes: number): string => {
  const hours = Math.floor(minutes / 60)
    .toString()
    .padStart(2, "0");
  const mins = (minutes % 60).toString().padStart(2, "0");
  return `${hours}:${mins}`;
};

export const MyAgenda = () => {
  const { data } = useAgenda();
  const { savedCardIds, toggleSaveCard } = useSavedTalks();

  const allTalks = data ? Object.values(data).flat() : [];

  const savedTalks = allTalks.filter((item: Palestra) =>
    savedCardIds.includes(item.id)
  );

  const talksByHour: Record<string, Palestra[]> = {};
  savedTalks.forEach((talk) => {
    if (!talksByHour[talk.hour]) {
      talksByHour[talk.hour] = [];
    }
    talksByHour[talk.hour].push(talk);
  });

  const sortedHours = Object.keys(talksByHour)
    .map(convertToMinutes) 
    .sort((a, b) => a - b) 
    .map(convertToTimeString); 

  return (
    <section className="container mt-12 flex flex-col items-center">
      <ReturnButton />
      <Header label="Minha Agenda" />

      <div className="mt-8">
        <LinkAgenda />
      </div>
      <DeadComponent title={"Abertura"} hours={"8:00"} />
      {sortedHours.length > 0 ? (
        sortedHours.map((hour) => (
          <div key={hour} className="w-full mt-8">
            <div className="mt-4 flex flex-col items-center gap-3">
              {talksByHour[hour].map((talk) => (
                <SpeakerCard
                  key={talk.id}
                  hour={talk.hour}
                  label={talk.title}
                  tags={talk.tags}
                  imageUrl={talk.speaker.image}
                  imageFallback={talk.speaker.title[0]}
                  name={talk.speaker.title}
                  role={talk.speaker.role}
                  isSaved={true}
                  onChangeMode={() => toggleSaveCard(talk.id)}
                />
              ))}
            </div>
          </div>
        ))
      ) : (
        <p>Nenhuma palestra salva para exibir.</p>
      )}

      <DeadComponent title={"Encerramento"} hours={"18:00"} />
    </section>
  );
};
