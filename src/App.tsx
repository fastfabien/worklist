import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Table } from "./components/Table";
import { CreateTask } from "./components/Tache";
import { supabase } from "./supabaseClient";
import { Tache } from "./types";

function App() {
  const [taches, setTaches] = useState<Tache[] | null>();

  useEffect(() => {
    getAllTaches();
  }, [taches]);
  const getAllTaches = async () => {
    const { data } = await supabase.from("tache").select();
    const taches = data
      ? data.map((tache: any) => ({
          ...tache,
          date_limit: new Date(tache.date_limit),
        }))
      : [];
    setTaches(taches);
  };

  return (
    <div className="px-8 py-7 flex flex-col gap-3">
      {" "}
      <CreateTask />
      {taches && taches.length > 0 ? (
        <Table taches={taches} />
      ) : (
        <p>no tache is available</p>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
