import { useState } from "react";
import { convertDate } from "../../utils";

interface InputProps {
  placeholder: string;
  type: "text" | "date" | "textarea" | "datetime-local";
  name: string;
  classname?: string;
  currentValue?: any | null;
}

export const Input = ({
  placeholder,
  type,
  classname,
  currentValue,
  name,
}: InputProps) => {
  const [value, setValue] = useState(currentValue);
  const [hasError, setHasError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setValue: React.Dispatch<React.SetStateAction<any>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const input = e.target;

    if (input.value === "") {
      setError(true);
      setValue("");
    } else {
      setError(false);
      setValue(input.value);
    }
  };

  return (
    <>
      {type !== "textarea" ? (
        <div className="flex flex-col gap-2">
          <input
            type={type}
            placeholder={placeholder}
            className={`input input-bordered w-full placeholder:capitalize ${
              hasError && "border-secondary"
            } ${classname}`}
            value={type !== "date" ? value : convertDate(value)}
            onChange={(e) => handleChange(e, setValue, setHasError)}
            name={name}
            required
          />
          {hasError && (
            <span className="text-xs text-red-600 font-bold">
              Valeur requis!
            </span>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          <textarea
            placeholder={placeholder}
            className={`input input-bordered w-full placeholder:capitalize ${
              hasError && "border-secondary"
            } h-15 ${classname}`}
            value={value}
            onChange={(e) => handleChange(e, setValue, setHasError)}
            name={name}
            required
          />
          {hasError && (
            <span className="text-xs text-red-600 font-bold">
              Valeur requis!
            </span>
          )}
        </div>
      )}
    </>
  );
};

export const Select = ({
  currentValue,
  name,
}: {
  currentValue: string;
  name: string;
}) => {
  const available_status = ["en attente", "en cours", "terminer"];
  return (
    <select className="select select-bordered w-full" name={name}>
      {available_status.map((status, index) => (
        <option selected={status === currentValue} key={index} value={status}>
          {status}
        </option>
      ))}
    </select>
  );
};
