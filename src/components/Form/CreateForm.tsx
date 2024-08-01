import { createTask } from "../../utils";
import { Form } from "./Form";
import { Input } from "./Input";

export const CreateForm = () => {
  return (
    <div className="relative flex flex-col gap-6 w-1/2 items-center">
      <h1 className="uppercase font-bold text-white w-full text-3xl">
        Créer une tache ?
      </h1>
      <Form onsubmit={createTask} classname="flex flex-col gap-3 w-full">
        <Input placeholder="tache" type="text" name="name" />
        <Input placeholder="description" type="textarea" name="description" />
        <Input placeholder="date limite" type="date" name="date_limit" />
        <button type="submit" className="btn btn-warning capitalize mt-6">
          create
        </button>
      </Form>
    </div>
  );
};
