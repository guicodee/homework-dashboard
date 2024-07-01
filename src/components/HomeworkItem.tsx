import { Check, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface HomeworkItemProps {
  title: string
  description: string
  priority: "low" | "medium" | "high"
}

export function HomeworkItem({title, description, priority}: HomeworkItemProps) {

  return (
    <div className="border mb-8 p-4 rounded-md">
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="text-xl antialiased font-medium mb-2">{title}</h2>
          <span className="text-base antialiased text-zinc-200">{description}</span>
        </div>
        <div className="flex flex-col">
          <Label className="text-sm font-semibold text-zinc-300 mb-2">Status</Label>
          <span className="font-medium text-sm text-yellow-700 bg-yellow-400 px-2 rounded-full">{priority}</span>
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
  )
}