import { Trash } from "lucide-react";
import { useEffect } from "react";
import { TableProps, Tache } from "../../types";
import { deleteTask } from "../../utils";
import { StatusChanger, UpdateTask } from "../Tache";

export const Table = ({ taches }: TableProps) => {
  useEffect(() => {}, [taches]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>name</th>
            <th>description</th>
            <th>status</th>
            <th>date limite</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {taches &&
            taches.map((tache: Tache) => (
              <tr key={tache.id}>
                <td>{tache.name}</td>
                <td>{tache.description} </td>
                <td>
                  <StatusChanger status={tache.status} id={tache.id} />
                </td>
                <td>{tache.date_limit.toDateString()}</td>
                <td className="flex items-center text-primary">
                  <UpdateTask
                    date_limit={tache.date_limit}
                    description={tache.description}
                    id={tache.id}
                    name={tache.name}
                    status={tache.status}
                  />
                  <Trash
                    className="text-secondary cursor-pointer hover:opacity-85"
                    onClick={() => deleteTask(tache.id)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
