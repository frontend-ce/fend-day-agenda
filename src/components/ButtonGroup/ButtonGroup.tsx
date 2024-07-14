import { ButtonTalk } from "../ButtonTalk";

export const ButtonGroup = () => {
  return (
    <div className="flex justify-center
    gap-4 flex-wrap w-full
    background-slate-200 h-50">
      <ButtonTalk children="Front-End CE" initialMode={false} />
      <ButtonTalk children="Convida" initialMode={false} />
      <ButtonTalk children="Fire Banking" initialMode={false} />
      <ButtonTalk children="Fire Banking" initialMode={false} />
    </div>
  );
};