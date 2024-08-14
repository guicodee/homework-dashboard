import { Calendar } from "lucide-react";
import { HomeworkItem } from "@/components/HomeworkItem";
import { useContext } from "react";
import { HomeworkContext } from "@/context/Homework";
import { Priority } from "@/types/Priority";
import { Separator } from "@/components/ui/separator";

export function List() {
  const { filteredHomeworks, resetFilter, filteredByPriority, currentPriority } = useContext(HomeworkContext);

  return (
    <main className="flex-1 flex-col gap-4 p-8 pt-6">
      <div className="flex flex-col gap-11">
        <div className="flex justify-around max-md:justify-start">
          <h1 className="text-2xl font-bold tracking-tight max-md:text-xl">Dashboard</h1>
          <h1 className="text-2xl font-bold tracking-tight max-md:hidden">Homework</h1>
        </div>
        <div className="grid grid-cols-custom gap-20 max-lg:grid-cols-[340px_1fr] max-md:flex flex-col max-md:gap-16">
          <div className="col-span-1">
            <div className="p-2 flex items-center justify-between mb-10 max-md:w-[330px]">
              <div>
                <h3 className="text-lg opacity-90 text-zinc-200 mb-3 max-md:text-base">Tarefa Pendentes</h3>
                <span className="text-2xl font-semibold max-md:text-xl">{filteredHomeworks.length}</span>
              </div>
              <Calendar className="max-md:h-5" />
            </div>
          </div>
          <div className="col-span-1 space-y-6">
            <h1 className="text-xl font-bold tracking-tight md:hidden">Homework</h1>
            <div className="flex items-center gap-7 bg-zinc-800 py-2 px-6 max-w-max font-semibold mb-5 rounded-lg max-md:text-sm max-md:gap-5">
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