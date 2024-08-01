import { Tache } from "../../types";
import { updateTask } from "../../utils";
import { Form } from "./Form";
import { Input, Select } from "./Input";

export const UpdateForm = ({
  date_limit,
  description,
  id,
  name,
  status,
}: Tache) => {
  return (
    <div className="relative flex flex-col gap-6 w-1/2 items-center">
      <h1 className="uppercase font-bold text-white w-full text-3xl">
        Tu veux ?
      </h1>
      <Form onsubmit={updateTask} classname="flex flex-col gap-3 w-full">
        <input type="hidden" value={id} name="id" />
        <Input
          placeholder="tache"
          type="text"
          name="name"
          currentValue={name}
        />
        <Input
          placeholder="description"
          type="text"
          name="description"
          currentValue={description}
        />
        <Select currentValue={status} name="status" />
        <Input
          placeholder="date limite"
          type="date"
          name="date_limit"
          currentValue={date_limit}
        />
        <button type="submit" className="btn btn-warning capitalize mt-6">
          create
        </button>
      </Form>
    </div>
  );
};
