import { Calendar, Check, CircleCheck, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export function List() {

  return (
    <main className="flex-1 flex-col gap-4 p-8 pt-6">
      <div className="flex flex-col gap-11">
        <div className="flex justify-around gap-8">
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <h1 className="text-2xl font-bold tracking-tight">Homework</h1>
        </div>
        <div className="grid grid-cols-2 gap-6">
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
            <div className="flex justify-between mb-8">
              <div>
                <h2 className="text-xl antialiased font-medium mb-2">Tarefa 1</h2>
                <span className="text-base antialiased text-zinc-200">Descrição da tarefa 1</span>
              </div>
              <div className="flex flex-col">
                <Label className="text-sm font-semibold text-zinc-300 mb-2">Status</Label>
                <span className="font-medium text-sm text-yellow-700 bg-yellow-400 px-2 rounded-full">Médio</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant={"destructive"}>
                <Trash className="w-5 h-5" />
              </Button>
              <Button className="flex items-center gap-3 font-semibold" variant={"success"}>
                <Check className="w-5 h-5" />
                Concluído
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}