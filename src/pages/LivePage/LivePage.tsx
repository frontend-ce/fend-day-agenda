import { Header } from "@/components/Header";
import { SpeakerSection } from "@/components/SpeakerSection";
import { Separator } from "@/components/ui/separator";
import { useAgenda } from "@/hooks/useAgenda";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { saveLocalStorage } from "./utils/saveLocalStorage";
import { getLiveTalk, getNextTalk } from "./utils/talks";

export const LivePage = () => {
  const { data } = useAgenda();

  const [savedCardIds, setSavedCardIds] = useState<number[]>([]);
  const now = new Date();

  const liveFrontendTalk = getLiveTalk(data?.Frontend || [], now);
  const liveConvidadosTalk = getLiveTalk(data?.Convida || [], now);
  const liveComunidadesTalk = getLiveTalk(data?.Comunidades || [], now);

  const nextFrontendTalk = getNextTalk(data?.Frontend || [], now);
  const nextComunidadesTalk = getNextTalk(data?.Comunidades || [], now);
  const nextConvidadosTalk = getNextTalk(data?.Convida || [], now);

  return (
    <section className="container mt-8 flex flex-col items-center">
      <Link to="/" className="self-start">
        <ChevronLeft size={28} className="text-[#A855F7] self-start absolute" />
      </Link>
      <Header label="Agenda do Evento" />
      <h2 className="text-white text-center mt-8 text-xl font-semibold">
        Acontecendo agora:
      </h2>
      {liveFrontendTalk || liveConvidadosTalk || liveComunidadesTalk ? (
        <>
          <SpeakerSection
            handleCardModeChange={(cardId, newMode) =>
              saveLocalStorage(cardId, newMode, setSavedCardIds)
            }
            liveTalk={liveFrontendTalk}
            savedCardIds={savedCardIds}
            sectionTitle="Front-End CE"
          />
          <SpeakerSection
            handleCardModeChange={(cardId, newMode) =>
              saveLocalStorage(cardId, newMode, setSavedCardIds)
            }
            liveTalk={liveConvidadosTalk}
            savedCardIds={savedCardIds}
            sectionTitle="Convida"
          />
          <SpeakerSection
            handleCardModeChange={(cardId, newMode) =>
              saveLocalStorage(cardId, newMode, setSavedCardIds)
            }
            liveTalk={liveComunidadesTalk}
            savedCardIds={savedCardIds}
            sectionTitle="Comunidades"
          />
        </>
      ) : (
        <p className="text-white text-center mt-4">
          Se avexe não, já já tem mais! 🙂 🥳
        </p>
      )}
      <Separator className="w-20 mt-8 h-1 rounded-2xl self-center bg-[#7c3aed]" />
      <section className="my-8">
        <h3 className="text-xl font-semibold text-center text-white">
          Próximas Talks
        </h3>
        {nextFrontendTalk || nextConvidadosTalk || nextComunidadesTalk ? (
          <>
            <SpeakerSection
              handleCardModeChange={(cardId, newMode) =>
                saveLocalStorage(cardId, newMode, setSavedCardIds)
              }
              liveTalk={nextFrontendTalk}
              savedCardIds={savedCardIds}
              sectionTitle="Front-End CE"
            />
            <SpeakerSection
              handleCardModeChange={(cardId, newMode) =>
                saveLocalStorage(cardId, newMode, setSavedCardIds)
              }
              liveTalk={nextConvidadosTalk}
              savedCardIds={savedCardIds}
              sectionTitle="Convida"
            />
            <SpeakerSection
              handleCardModeChange={(cardId, newMode) =>
                saveLocalStorage(cardId, newMode, setSavedCardIds)
              }
              liveTalk={nextComunidadesTalk}
              savedCardIds={savedCardIds}
              sectionTitle="Comunidades"
            />
          </>
        ) : (
          <p className="text-white text-center mt-4">
            Fique ligado, as próximas talks estão chegando!
          </p>
        )}
      </section>
    </section>
  );
};
