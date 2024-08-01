import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../supabaseClient";
import { Tache } from "../types";

export const createTask = async (task: Partial<Tache>) => {
  Object.assign(task, {
    id: uuidv4(),
    status: "en attente",
  });

  try {
    const { error } = await supabase.from("tache").insert(task);

    if (error) {
      toast.success(error.message);
    } else {
      toast.success("Tâche créer avec succès !");
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Erreur inconnue.";

    toast.error(errorMessage);
  }
};
export const updateTask = async (task: Partial<Tache>) => {
  try {
    const { error } = await supabase
      .from("tache")
      .update(task)
      .eq("id", task.id);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Tâche modifier !");
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Erreur inconnue.";

    toast.error(errorMessage);
  }
};

export const deleteTask = async (id: string) => {
  try {
    const { error } = await supabase
      .from("tache")
      .delete()
      .eq("id", id)
      .select();
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Suppression reussie!");
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Erreur inconnue.";

    toast.error(errorMessage);
  }
};

export const convertDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const updateStatus = async (id: string, value: string) => {
  try {
    const { error } = await supabase
      .from("tache")
      .update({ status: value })
      .eq("id", id);
    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Tâche modifier !");
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Erreur inconnue.";

    toast.error(errorMessage);
  }
};
