export interface Tache {
  id: string;
  name: string;
  description: string;
  status: "en attente" | "en cours" | "terminer";
  date_limit: Date;
}

export interface TableProps {
  taches: Tache[];
}
