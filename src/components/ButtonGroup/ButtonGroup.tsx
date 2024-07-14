import { ButtonTalk } from "../ButtonTalk";

export const ButtonGroup = () => {
  return (
    <div className="flex justify-center
    gap-4 flex-wrap w-full
    background-slate-200 h-50">
      <ButtonTalk children="Test" mode={undefined} />
      <ButtonTalk children="" mode={undefined} />
      <ButtonTalk children="" mode={undefined} />
      <ButtonTalk children="" mode={undefined} />
    </div>
  );
};