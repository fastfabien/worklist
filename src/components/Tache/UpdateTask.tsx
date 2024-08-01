import { Edit } from "lucide-react";
import { Tache } from "../../types";
import { Action } from "../Common";
import { UpdateForm } from "../Form";

export const UpdateTask = ({
  date_limit,
  description,
  id,
  name,
  status,
}: Tache) => {
  return (
    <Action icon={<Edit />} classname="btn-sm">
      <UpdateForm
        date_limit={date_limit}
        description={description}
        id={id}
        name={name}
        status={status}
      />
    </Action>
  );
};
