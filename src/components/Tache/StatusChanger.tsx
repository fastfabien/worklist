import { useEffect, useState } from "react";
import { updateStatus } from "../../utils";

export const StatusChanger = ({
  status,
  id,
}: {
  status: string;
  id: string;
}) => {
  const [value, setValue] = useState<string>(status);
  const available_status = ["en attente", "en cours", "terminer"];

  useEffect(() => {
    setValue(status);
  }, [status]);

  const changeStatus = (currentStatus: string, direction: number) => {
    const index = available_status.findIndex((s) => s === currentStatus);
    if (index !== -1) {
      const newIndex = index + direction;
      if (newIndex >= 0 && newIndex < available_status.length) {
        setValue(available_status[newIndex]);
      }
    }
  };

  const handleIncreaseValue = () => changeStatus(value, 1);
  const handleDecreaseValue = () => changeStatus(value, -1);

  return (
    <div
      className="badge badge-primary cursor-pointer hover:badge-secondary"
      onMouseEnter={handleIncreaseValue}
      onMouseLeave={handleDecreaseValue}
      onClick={() => updateStatus(id, value)}
    >
      {value}
    </div>
  );
};
