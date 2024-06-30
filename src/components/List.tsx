import { Calendar, CircleCheck } from "lucide-react";
import { HomeworkItem } from "./HomeworkItem";

export function List() {

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
                <span className="text-2xl font-semibold">3</span>
              </div>
              <Calendar />
            </div>
            <div className="p-2 flex items-center justify-between">
              <div>
                <h3 className="text-lg opacity-90 text-zinc-200 mb-3">Tarefa Pendentes</h3>
                <span className="text-2xl font-semibold">3</span>
              </div>
              <CircleCheck />
            </div>
          </div>
          <div className="col-span-1">
          {Array.from({ length: 4 }).map((_, i) => {
            return (
              <HomeworkItem 
                key={i}
                title="Titulo da descrição "
                description="Descrição de cada tarefa"
                status="Médio"
              />
            );
          })}
          </div>
        </div>
      </div>
    </main>
  )
}