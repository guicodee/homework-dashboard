import { Calendar } from "lucide-react";
import { HomeworkItem } from "./HomeworkItem";
import { useContext } from "react";
import { HomeworkContext } from "@/context/Homework";
import { Priority } from "@/types/Priority";
import { Separator } from "./ui/separator";

export function List() {
  const { filteredHomeworks, resetFilter, filteredByPriority, currentPriority } = useContext(HomeworkContext);

  return (
    <main className="flex-1 flex-col gap-4 p-8 pt-6">
      <div className="flex flex-col gap-11">
        <div className="flex justify-around">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <h1 className="text-2xl font-bold tracking-tight">Homework</h1>
        </div>
        <div className="grid grid-cols-custom gap-40">
          <div className="col-span-1">
            <div className="p-2 flex items-center justify-between mb-10">
              <div>
                <h3 className="text-lg opacity-90 text-zinc-200 mb-3">Tarefa Pendentes</h3>
                <span className="text-2xl font-semibold">{filteredHomeworks.length}</span>
              </div>
              <Calendar />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex items-center gap-7 bg-zinc-800 py-2 px-6 max-w-max font-semibold mb-5 rounded-lg">
              <div className="flex items-center gap-7">
                <a className={`cursor-pointer ${currentPriority === null ? 'text-zinc-100' : 'text-zinc-500'}`} onClick={resetFilter}>All</a>
                <Separator orientation="vertical" className="h-6" />
              </div>
              <div className="flex items-center gap-7">
                <a className={`cursor-pointer ${currentPriority === Priority.Low ? 'text-zinc-100' : 'text-zinc-500'}`} onClick={() => filteredByPriority(Priority.Low)}>Low</a>
                <Separator orientation="vertical" className="h-6" />
              </div>
              <div className="flex items-center gap-7">
                <a className={`cursor-pointer ${currentPriority === Priority.Medium ? 'text-zinc-100' : 'text-zinc-500'}`} onClick={() => filteredByPriority(Priority.Medium)}>Medium</a>
                <Separator orientation="vertical" className="h-6" />
              </div>
              <div className="flex items-center gap-7">
                <a className={`cursor-pointer ${currentPriority === Priority.High ? 'text-zinc-100' : 'text-zinc-500'}`} onClick={() => filteredByPriority(Priority.High)}>High</a>
              </div>
            </div>
            {filteredHomeworks.length === 0 ? (
              <h1>Sem tarefas pendentes</h1>  
            ) : (
              filteredHomeworks.map((homework) => (
                <HomeworkItem 
                  id={homework.id}
                  done={homework.done}
                  key={homework.id}
                  title={homework.title}
                  description={homework.description}
                  priority={homework.priority}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  )
}