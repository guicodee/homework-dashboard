import { Layers } from "lucide-react";
import { CreateHomework } from "@/components/CreateHomework";

export function Header() {

  return (
    <header className="border-b">
      <div className="flex h-16 justify-between items-center gap-6 px-6">
        <div className="flex items-center gap-6 max-md:gap-4">
          <Layers className="h-6 max-md:h-5" />
          <h1 className="text-2xl max-md:text-lg max-sm:text-base font-bold tracking-tight">Homework Tracker</h1>
        </div>
        <CreateHomework />
      </div>
    </header>
  )
}