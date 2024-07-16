import { Link } from "react-router-dom";

export const LinkAgenda = () => {

  

  return (
    <div className="flex justify-center  items-center">
      <div className="text-white flex flex-row justify-between items-center p-2 md:p-1 space-x-4 md:space-x-6">
        <Link
          className="underline text-[12px] "
          to="/lives"
        >
          Acontecendo agora
        </Link>
        <Link
          className="underline text-[12px] md:text-sm flex-1 text-center p-2 md:p-1"
          to="/agenda"
        >
          Ver minha agenda &gt;
        </Link>
      </div>
    </div>
  );
};
