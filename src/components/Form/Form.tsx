import { Tache } from "../../types";

interface FormProps {
  children: React.ReactNode;
  onsubmit: (form: HTMLFormElement) => void;
  classname?: string;
}

export const Form = ({ children, onsubmit, classname }: FormProps) => {
  const handleSubmit = (e: any, action: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const task: Partial<Tache> = {};

    formData.forEach((value, key) => {
      task[key as keyof Tache] = value as any;
    });

    action(task);
  };
  return (
    <form
      onSubmit={(e) => handleSubmit(e, onsubmit)}
      className={`${classname}`}
    >
      {children}
    </form>
  );
};
