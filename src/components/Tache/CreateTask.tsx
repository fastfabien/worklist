import { Plus } from "lucide-react";
import { Action } from "../Common";
import { CreateForm } from "../Form";

export const CreateTask = () => {
  return (
    <Action icon={<Plus />} classname="btn btn-primary">
      <CreateForm />
    </Action>
  );
};
