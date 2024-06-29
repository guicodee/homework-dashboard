import { Layers } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {

  return (
    <div className="border-b">
      <div className="flex h-16 justify-between items-center gap-6 px-6">
        <div className="flex items-center gap-6">
          <Layers className="h-6 w-6" />
          <h1 className="text-2xl font-bold tracking-tight">Homework Tracker</h1>
        </div>
        <Button className="rounded-md">Nova Tarefa</Button>
      </div>
    </div>
  )
}