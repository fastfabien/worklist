import { X } from "lucide-react";
import { useState } from "react";

interface ActionProps {
  icon: JSX.Element;
  children: React.ReactNode;
  classname?: string;
}

export const Action = ({ children, icon, classname }: ActionProps) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <>
      <button className={`w-fit ${classname}`} onClick={() => setIsShow(true)}>
        {icon}
      </button>
      {isShow && (
        <div className="flex flex-col justify-center items-center fixed z-20 top-0 bottom-0 left-0 right-0 w-full bg-black bg-opacity-80">
          <X
            onClick={() => setIsShow(false)}
            className="absolute top-4 right-4 cursor-pointer w-9 h-9"
          />
          {children}
        </div>
      )}
    </>
  );
};
